import Image from '@/components/Image'
import Link from '@/components/Link'

interface CardMiniProps {
  data: {
    main_picture: {
      large: string
    }
    synopsis: string
    rank: number
    popularity: number
    genres: {
      name: string
    }[]
    num_episodes: number
    rating: string
    studios: {
      name: string
    }[]
    statistics: {
      num_list_users: number
    }
    media_type: string
  }
}
export default function CardMini({ data }: CardMiniProps) {
  console.log(data)
  return (
    // Use grid and grid-cols-2 for medium screens and above
    <div className="mb-4 w-full border-2 border-dotted p-5 dark:border-gray-700 dark:bg-[#111010] md:grid md:grid-cols-2">
      <Image
        alt={'Gambar'}
        src={data?.main_picture?.large}
        className=" rounded-lg object-cover object-center"
        quality={10}
        width={500}
        height={500}
        priority
      />
      <div className="space-y-4 sm:ml-4">
        <div className="grid grid-cols-2 ">
          <div>
            <h3 className=" text-lg font-semibold">Rank </h3>
            <h1 className="text-3xl">#{data?.rank}</h1>
          </div>
          <div>
            <h3 className=" text-lg font-semibold">Popularity </h3>
            <h1 className="text-3xl">#{data?.popularity}</h1>
          </div>
        </div>
        <div>
          <h3 className=" text-lg font-semibold">Genres </h3>
          <div className="flex flex-wrap">
            {data?.genres.map((genre) => (
              <div
                key={genre.name}
                className="mb-2 mr-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {genre.name}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div>
            <h3 className=" text-lg font-semibold">Episodes </h3>
            <h1 className="text-3xl">{data?.num_episodes}</h1>
          </div>
          <div>
            <h3 className=" text-lg font-semibold">Rating </h3>
            <h1 className="text-3xl">{data?.rating}</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div>
            <h3 className=" text-lg font-semibold">Users </h3>
            <h1 className="text-3xl">{data?.statistics.num_list_users}</h1>
          </div>
          <div>
            <h3 className=" text-lg font-semibold">Type </h3>
            <h1 className="text-3xl">{data?.media_type}</h1>
          </div>
        </div>
        <div>
          <h3 className=" text-lg font-semibold">Studios </h3>
          <div className="flex flex-wrap">
            {data?.studios.map((studio) => (
              <div
                key={studio.name}
                className="mb-2 mr-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {studio.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
