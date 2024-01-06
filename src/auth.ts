import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './lib/prisma'
import { PrismaClient } from '@prisma/client'

import NextAuth, { DefaultSession } from 'next-auth'
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id: string
    user: {
      /** The user's postal address. */
      address: string
      // By default, TypeScript merges new interface properties and overwrite existing ones. In this case, the default session user properties will be overwritten, with the new one defined above. To keep the default session user properties, you need to add them back into the newly declared interface
    } & DefaultSession['user'] // To keep the default types
  }
}

import GitHub from 'next-auth/providers/github'

import type { NextAuthConfig } from 'next-auth'

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async session({ session, user }) {
      session.id = user.id
      return Promise.resolve(session)
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
