'use client'

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import CustomLink from './Link'
import { SiGithub } from 'react-icons/si'

export default function Commits() {
  const { data } = useSWR('/api/github/commit', fetcher)
  return (
    <section className="mb-5 mt-20 flex snap-center flex-col justify-center">
      <h1 className="mb-8 text-2xl font-medium">Update Log</h1>
      <ul className="relative">
        {data?.map((commit) => (
          <li key={commit.sha} className="mb-5">
            <CustomLink href={commit.url} showIcon={false}>
              <h2 className="text-md font-medium text-gray-900 dark:text-white">
                {commit.message}
              </h2>
            </CustomLink>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
              {commit.time}
            </time>
          </li>
        ))}
      </ul>
    </section>
  )
}
