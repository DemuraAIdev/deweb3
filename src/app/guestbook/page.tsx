import { auth } from '@/auth'
import { SignIn, SignOut, DeleteEnt } from './button'
import { Suspense } from 'react'
import Form from './form'
import { getGuestbookEntries } from '@/lib/db/action'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Guestbook' })

export default function GuestBook() {
  return (
    <>
      <div>
        <div className=" mb-4 space-y-2 pt-6 md:space-y-5">
          <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
            Guestbook
          </h1>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <GuestbookForm />
          <GuestbookEntries />
        </Suspense>
      </div>
    </>
  )
}

async function GuestbookForm() {
  const session = await auth()

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  )
}

async function GuestbookEntries() {
  const entries = await getGuestbookEntries()
  const currentuserid = await auth()

  if (entries.length === 0) {
    return null
  }

  return entries.map((entry) => (
    <div key={entry.id} className="mb-4 flex flex-col space-y-1">
      <div className="w-full break-words text-sm">
        {entry.user?.id === currentuserid?.id && <DeleteEnt id={entry.id} />}
        <span className="mr-1 text-neutral-600 dark:text-neutral-400">{entry.user?.name}:</span>
        {entry.message}
      </div>
    </div>
  ))
}
