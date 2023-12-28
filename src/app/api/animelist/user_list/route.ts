import { getUserWatchAnime } from '@/lib/myanimelist'
import { NextRequest, NextResponse } from 'next/server'
// export const runtime = 'edge'
export const dynamic = {
  refresh: '1 day',
}
import type { UserWatchAnime } from '@/lib/myanimelist'

export async function GET(request: NextRequest, { params }: { params: { status: string } }) {
  const url_param_status = request.nextUrl.searchParams.get('status')

  if (url_param_status) {
    const response: UserWatchAnime[] = await getUserWatchAnime(url_param_status)
    return NextResponse.json(response)
  }

  return NextResponse.json({}) // Fix: Replace resresponseponse with a valid response object
}
