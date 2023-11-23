'use server'

import prisma from '@/lib/prisma'
import { auth } from '@/auth'
import { type Session } from 'next-auth'
import { revalidatePath, unstable_noStore as noStore } from 'next/cache'

type User = {
  [x: string]: string
  id: string
  name: string
  image: string
}

export type GuestBookEntry = {
  id: string
  body: string
  updated_at: string
  user: User
}

async function getSession(): Promise<Session> {
  const session = await auth()
  if (!session || !session.user) {
    throw new Error('Unauthorized')
  }

  return session
}

export async function saveGuestMessage(formData: FormData) {
  const session = await getSession()
  // const email = session.user?.email as string
  // const created_by = session.user?.name as string
  const id = session.id

  if (!session.user) {
    throw new Error('Unauthorized')
  }

  const entry = formData.get('entry')?.toString() || ''
  const body = entry.slice(0, 500)

  // await sql`
  //     INSERT INTO guestbook (email, body, created_by, created_at)
  //     VALUES (${email}, ${body}, ${created_by}, NOW())
  //   `
  const NewG = await prisma.guestbook.create({
    data: {
      userId: id,
      message: body,
    },
  })

  revalidatePath('/guestbook')
}

export async function deleteGuestbookEntries(idEntries: string) {
  const session = await getSession()
  const { user, id: userId } = session
  const entry = await prisma.guestbook.findUnique({
    where: {
      id: idEntries,
    },
    select: { id: true, message: true, updatedAt: true, user: true, userId: true },
  })

  if (!user || userId !== entry?.userId) {
    throw new Error('Unauthorized')
  }

  await prisma.guestbook.delete({
    where: {
      id: idEntries,
    },
  })

  revalidatePath('/guestbook')
}

export async function getGuestbookEntries() {
  noStore()
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    select: {
      id: true,
      message: true,
      updatedAt: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    // cacheStrategy: { swr: 60 },
  })

  return entries
}
