'use client'
import Link from './Link'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import MusicEqualizer from './MusicEq'
import Image from 'next/image'
import { FaSpotify, FaHeadphones } from 'react-icons/fa'

export default function NowPlaying() {
  const { data } = useSWR('/api/spotify/np', fetcher)

  // Update progress when data change
  return (
    <div className="line-clamp-1 flex rounded-lg  ">
      {/* {data?.isPlaying && data?.songUrl && <MusicEqualizer />} */}
      <div className="pr-4  ">
        {data?.isPlaying ? (
          <FaSpotify className="animate-pulse text-2xl text-spotify-green" />
        ) : (
          <FaSpotify className=" text-2xl text-spotify-green" />
        )}
      </div>
      <div>
        {data?.songUrl ? (
          <h1 className="text-base font-medium">
            Listening to...{' '}
            <Link
              className="max-w-max truncate text-sm hover:text-spotify-green"
              href={data.songUrl}
              title={data.title}
              showIcon={false}
            >
              {data.title}
            </Link>
            <span className="font-semibold text-gray-300"> By </span>
            <span className="text-gray-500 dark:text-gray-400">{data?.artist ?? 'Spotify'}</span>
          </h1>
        ) : (
          <h1 className="text-base font-medium">
            last Played :{' '}
            <Link
              className="max-w-max truncate text-sm hover:text-spotify-green"
              href={'https://open.spotify.com/'}
              title={data?.recentlyPlayed?.trackName || 'Ads'}
              showIcon={false}
            >
              {data?.recentlyPlayed?.trackName || 'Ads'}
            </Link>{' '}
            <span className="font-semibold text-gray-300"> By </span>
            <span className="text-gray-500 dark:text-gray-400">
              {data?.recentlyPlayed?.artistName || 'Spotify'}
            </span>
          </h1>
        )}
        {/* {data?.isPlaying && data?.songUrl && <MusicEqualizer />} */}
      </div>
    </div>
  )
}
