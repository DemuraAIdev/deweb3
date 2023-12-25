import Link from './Link'

export default function CardMini({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <div className="w-full p-4 md:w-1/2">
      <Link href={href} showIcon={false} aria-label={`Link to ${title}`}>
        <div className="flex h-full transform flex-col justify-between rounded-lg border-2 border-dotted border-gray-500 bg-white p-5  transition duration-500 hover:scale-[1.03]  dark:bg-[#111010] dark:hover:bg-gray-800">
          <div className="p-6">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
