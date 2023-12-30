import { genPageMetadata } from '@/app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Anime-Completed' })
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
        <article className="hover:shadow-secondary group h-full overflow-hidden rounded-md border-2 border-dotted border-gray-500 p-5 transition-transform duration-500 hover:scale-[1.03]">
          <h2 className="mb-3 truncate text-2xl font-bold leading-8 tracking-tight">{title}</h2>
          <figure className="relative aspect-video overflow-hidden">
            <Image
              alt={title}
              src={picture.large}
              className="rounded-lg object-cover object-center"
              quality={10}
              fill
              sizes="100%"
              priority
            />
          </figure>
          <h3 className="truncate text-lg font-medium leading-8 tracking-tight">
            Rating : {score === 0 ? 'Waiting' : `${score}/10`}
          </h3>
        </article>
      </Link>
    </div>
  )
}
