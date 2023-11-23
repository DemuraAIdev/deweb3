import NextAuth, { DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from './lib/prisma'
import { PrismaClient } from '@prisma/client'

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

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  // workaround for prisma adapter cant be used with extends
  adapter: PrismaAdapter(prisma as unknown as PrismaClient),
  providers: [
    GitHub({
      clientId: process.env.GITH_CLIENT_KEY as string,
      clientSecret: process.env.GITH_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async session({ session, user }) {
      session.id = user.id
      return Promise.resolve(session)
    },
  },
})
