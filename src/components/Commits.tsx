'use client'

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import CustomLink from './Link'
import Image from './Image'

export default function Commits() {
  const { data } = useSWR('/api/github/commit', fetcher)
  return (
    <section className="">
      <div className="flex items-center justify-center">
        <h1 className="p-10 text-xl font-bold">Latest Updates</h1>
      </div>
      <ul className="relative border-s border-gray-200 dark:border-gray-700">
        {data?.map((commit) => (
          <li key={commit.sha} className="mb-10 ms-4 ">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ">
              <Image
                src={commit.avatar}
                alt="Avatar"
                className="rounded-full"
                width={24}
                height={24}
              />
            </span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {commit.time}
            </time>
            <CustomLink href={commit.url} showIcon={false}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {commit.message}
              </h3>
            </CustomLink>
            <p className="mb-4 line-clamp-1 text-base font-normal text-gray-500 dark:text-gray-400">
              {commit.sha}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
