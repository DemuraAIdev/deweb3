import { getMyRatingAnime } from '@/lib/myanimelist'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url_param_status = request.nextUrl.searchParams.get('id')

  if (url_param_status) {
    const response = await getMyRatingAnime(url_param_status)
    return NextResponse.json(response)
  }

  return NextResponse.json({}) // Fix: Replace resresponseponse with a valid response object
}
