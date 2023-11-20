import { NextAuth } from '@auth/nextjs'
import GitHub from '@auth/core/providers/github'

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [GitHub()],
})

export { handler as GET, handler as POST }
