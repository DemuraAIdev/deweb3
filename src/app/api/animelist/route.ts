import { getAnimeList } from '@/lib/myanimelist'
import { NextResponse } from 'next/server'
export const runtime = 'edge'
export const dynamic = 'force-dynamic'

interface Anime {
  node: {
    id: number
    title: string
    main_picture: {
      medium: string
    }
  }
  list_status: {
    status: string
    score: number
    num_episodes_watched: number
    is_rewatching: boolean
    updated_at: string
  }
}

export async function GET() {
  const response = await getAnimeList()

  const anime = await response.json()

  return NextResponse.json({
    anime,
  })
}
