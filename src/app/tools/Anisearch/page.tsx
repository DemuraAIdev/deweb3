import { genPageMetadata } from '@/app/seo'
import SearchBar from './searchbar'

export const metadata = genPageMetadata({
  title: 'Search Anime',
  description: 'Anime search.',
})

export default function LangG() {
  return (
    <div className="min-h-screen">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ">
        Search Anime
      </h2>
      <p className=" leading-7 text-gray-500 dark:text-gray-400">This is using API MyAnimeList.</p>
      <SearchBar />
    </div>
  )
}
