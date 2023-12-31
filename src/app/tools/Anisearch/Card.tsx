import Image from '@/components/Image'
import Link from '@/components/Link'

export default function CardMini({
  title,
  picture,
  id,
}: {
  title: string
  picture: { large: string }
  id: string
}) {
  return (
    <div className="w-full p-4 md:w-1/2">
      <Link href={`/anime/info/${id}`} showIcon={false} aria-label={`Link to /anime/completed`}>
        <article className="hover:shadow-secondary group h-full overflow-hidden rounded-md border-2 border-dotted border-gray-500 p-5 ">
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
        </article>
      </Link>
    </div>
  )
}
