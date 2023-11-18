'use client'

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import CustomLink from './Link'
import { SiGithub } from 'react-icons/si'

export default function Commits() {
  const { data } = useSWR('/api/github/commit', fetcher)
  return (
    <section className="mt-20 mb-5 flex snap-center flex-col justify-center">
      <h2 className=" py-5 text-xl font-bold">Latest Update</h2>
      <ul className="relative border-s border-gray-200 dark:border-gray-700">
        {data?.map((commit) => (
          <li key={commit.sha} className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
              {commit.time}
            </time>
            <CustomLink href={commit.url} showIcon={false}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {commit.message}
              </h3>
            </CustomLink>
          </li>
        ))}
        <li className="ms-4 max-w-sm rounded bg-white p-2">
          <CustomLink href={'https://github.com/DemuraAIdev'} showIcon={false}>
            <h3 className="text-center text-lg font-semibold text-black">Github</h3>
          </CustomLink>
        </li>
      </ul>
    </section>
  )
}
