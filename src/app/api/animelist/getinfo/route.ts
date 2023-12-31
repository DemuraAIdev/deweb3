import { getAnime } from '@/lib/myanimelist'
import { NextRequest, NextResponse } from 'next/server'
// export const runtime = 'edge'
import type { UserWatchAnime } from '@/lib/myanimelist'

export async function GET(request: NextRequest, { params }: { params: { status: string } }) {
  const url_param_status = request.nextUrl.searchParams.get('id')

  if (url_param_status) {
    const response: UserWatchAnime[] = await getAnime(url_param_status)
    return NextResponse.json(response)
  }

  return NextResponse.json({}) // Fix: Replace resresponseponse with a valid response object
}
