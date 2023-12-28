import Link from '@/components/Link'

export default function Anime() {
  return (
    <div>
      <div className=" space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          MyAnimeWatchList
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <Link href={'/anime/completed'} showIcon={false} aria-label={`Link to /anime/completed`}>
          <div className="flex h-full transform flex-col justify-between rounded-lg border-2 border-dotted border-gray-500 bg-white p-2  transition duration-500 hover:scale-[1.03]  dark:bg-[#111010] dark:hover:bg-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold leading-8 tracking-tight">Completed</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
