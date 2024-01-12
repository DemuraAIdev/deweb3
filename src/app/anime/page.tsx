import Link from '@/components/Link'
import { genPageMetadata } from '../seo'
import { IoIosStats } from 'react-icons/io'

export const metadata = genPageMetadata({ title: 'Anime' })
export default function Anime() {
  return (
    <div>
      <div className=" space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          Anime Watch List <IoIosStats className="inline-block" />
        </h1>
        <p className="leading-7 text-gray-500 dark:text-gray-400">
          This data powered By MyAnimeList
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <Link href={'/anime/completed'} showIcon={false} aria-label={`Link to /anime/completed`}>
          <div className="flex h-full transform flex-col justify-between rounded-lg border-2 border-dotted border-gray-500 bg-white p-2  transition duration-500 hover:scale-[1.03]  dark:bg-[#111010] dark:hover:bg-gray-800">
            <div className="p-6">
              <h2 className="select-none text-2xl font-bold leading-8 tracking-tight">Completed</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
