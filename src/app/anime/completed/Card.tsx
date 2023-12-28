import Image from '@/components/Image'
import Link from '@/components/Link'
export default function CardMini({
  title,
  picture,
  score,
}: {
  title: string
  picture: { large: string }
  score: number
}) {
  return (
    <div className="w-full p-2 md:w-1/2">
      <Link href={'/anime/completed'} showIcon={false} aria-label={`Link to /anime/completed`}>
        <div className="flex h-full transform flex-col justify-between rounded-lg border-2 border-dotted border-gray-500 bg-white p-2  transition duration-500 hover:scale-[1.03]  dark:bg-[#111010] dark:hover:bg-gray-800">
          <div className="p-5">
            <h2 className="mb-3 truncate text-2xl font-bold leading-8 tracking-tight">{title}</h2>
            <Image
              alt={title}
              src={picture.large}
              className="rounded-lg object-cover object-center md:h-36  lg:h-48"
              width={250}
              height={250}
            />
            <h3 className="truncate text-lg font-medium leading-8 tracking-tight">
              Rating : {score === 0 ? 'Waiting' : `${score}/10`}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
