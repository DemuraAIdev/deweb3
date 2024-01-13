import Image from './Image'
import Link from './Link'
import { FaRegFolder } from 'react-icons/fa'
interface CardProp {
  title: string
  description: string
  imgSrc?: string
  href?: string
  discontinued?: boolean
}

export default function ProjectCard({ title, description, imgSrc, href, discontinued }: CardProp) {
  return (
    <Link
      href={href!}
      showIcon={false}
      aria-label={`Link to ${title}`}
      data-umami-event="Project links"
      data-umami-event-project={title}
      className="w-full p-4 md:w-1/2"
    >
      {/* <div className="flex h-full transform flex-col justify-between rounded-lg border-2 border-dotted border-gray-500 bg-white p-5  transition duration-500 hover:scale-[1.03]  dark:bg-[#111010] dark:hover:bg-gray-800"> */}
      <article
        className={
          'hover:shadow-secondary group h-full overflow-hidden rounded-md border-2 border-dashed border-gray-500 p-5 transition-transform duration-500' +
          (discontinued ? ' opacity-50 hover:border-red-600 ' : ' hover:scale-[1.03]')
        }
      >
        <figure className="relative aspect-video overflow-hidden">
          {imgSrc ? (
            <>
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-lg object-cover object-center"
                blurDataURL={imgSrc}
                placeholder="blur"
                quality={10}
                fill
                sizes="100%"
                priority
              />
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-lg object-cover object-center"
                blurDataURL={imgSrc}
                placeholder="blur"
                quality={10}
                fill
                sizes="100%"
                priority
              />
            </>
          ) : (
            <div className="flex h-36 w-full items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
              <FaRegFolder className="h-10 w-10 text-gray-500 dark:text-gray-400 " />
            </div>
          )}
        </figure>
        <h2 className="mb-2 mt-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {/* </div> */}
      </article>
    </Link>
  )
}
