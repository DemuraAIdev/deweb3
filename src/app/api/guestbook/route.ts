import { NextRequest, NextResponse } from 'next/server'
import { getGuestbookEntries, saveGuestMessage } from '@/lib/db/action'

export async function GET() {
  const entries = await getGuestbookEntries()
  return NextResponse.json(entries)
}

// export async function POST(request: NextRequest) {
//   const formData = await request.body
//   console.log(formData)
//   return NextResponse.redirect('/guestbook')
// }
