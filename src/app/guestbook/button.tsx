'use client'

import { signIn, signOut } from 'next-auth/react'
import { SiGithub } from 'react-icons/si'
import { deleteGuestbookEntries } from '@/lib/db/action'
import CustomLink from '@/components/Link'

export function SignOut() {
  return (
    <button
      className="mb-6 mt-2 text-xs text-neutral-700 dark:text-neutral-300"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  )
}

export function SignIn() {
  return (
    <button
      className="mb-8 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-3 py-2 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      onClick={() => signIn('github')}
      data-umami-event="Signin button"
    >
      <SiGithub />
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  )
}

export function DeleteEnt(id: { id: string }) {
  return (
    <button
      className={
        'mr-2 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 transition-all dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100'
      }
      type="submit"
      onClick={() => deleteGuestbookEntries(id.id)}
    >
      Delete
    </button>
  )
}
