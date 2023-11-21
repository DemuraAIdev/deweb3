import { auth } from '@/auth'
import { SignIn, SignOut } from './button'
import { Suspense } from 'react'

export default function GuestBook({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          Guestbook
        </h1>
      </div>
      <Suspense>
        <GuestbookForm />
      </Suspense>
    </>
  )
}

async function GuestbookForm() {
  const session = await auth()

  return session?.user ? (
    <>
      <SignOut />
    </>
  ) : (
    <SignIn />
  )
}
