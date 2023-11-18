'use client'

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import CustomLink from './Link'

export default function Commits() {
  const { data } = useSWR('/api/github/commit', fetcher)
  return (
    <section className="mt-10">
      <h2 className=" py-5 text-xl font-bold">Latest Update</h2>
      <ul className="relative border-s border-gray-200 dark:border-gray-700">
        {data?.map((commit) => (
          <li key={commit.sha} className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {commit.time}
            </time>
            <CustomLink href={commit.url} showIcon={false}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {commit.message}
              </h3>
            </CustomLink>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {commit.sha}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
