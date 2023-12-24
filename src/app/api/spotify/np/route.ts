import { getNowPlaying } from '@/lib/apotify'
import { NextResponse } from 'next/server'
export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export interface NowPlayingSong {
  isPlaying: boolean
  artist?: string
  songUrl?: string
  title?: string
  albumImageUrl?: string
  album?: string
}

export async function GET() {
  const response = await getNowPlaying()
  if (response.status === 401) {
    return NextResponse.json({ isPlaying: false, title: 'Spotify is not connected' })
  } else if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false })
  }
  const song = await response.json()

  if (song.currently_playing_type === 'episode') {
    return NextResponse.json({
      isPlaying: true,
      title: 'Listening to a Podcast',
      artist: 'Spotify',
      songUrl: 'https://open.spotify.com/show/2Shpxw7dPoxRJCdfFXTWLE',
    })
  } else {
    const isPlaying = song.is_playing
    const title = song.item?.name
    const artist = song.item?.artists.map((_artist: { name: string }) => _artist.name).join(', ')
    const album = song.item?.album.name
    const albumImageUrl = song.item?.album.images[0].url
    const songUrl = song.item?.external_urls.spotify
    // const timestamp = formatTime(song.progress_ms)
    // const duration = formatTime(song.item?.duration_ms)

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      // timestamp,
      // duration,
    })
  }
}
