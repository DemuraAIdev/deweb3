'use client'

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import CustomLink from './Link'

import { Suspense } from 'react'
import { TbBeta } from 'react-icons/tb'

export default function Commits() {
  const { data } = useSWR('/api/github/commit', fetcher)
  return (
    <section className="mb-5 mt-20 flex snap-center flex-col justify-center">
      <h1 className="mb-8 text-2xl font-medium">Update Log</h1>

      <ul className="relative">
        <Suspense fallback={<div>Loading...</div>}>
          {data?.map((commit) => (
            <li key={commit.sha} className="mb-5">
              <CustomLink href={commit.html_url} showIcon={false}>
                <h2 className="text-md font-medium text-gray-900 dark:text-white">
                  {commit.message}
                </h2>
              </CustomLink>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                {commit.time}
              </time>
            </li>
          ))}
        </Suspense>
      </ul>
      <CustomLink
        href="https://beta.vahry.my.id"
        className="mb-8 inline-flex w-fit items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-3 py-2 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        data-umami-event="WebsiteBeta button"
      >
        <TbBeta />
        <div className="ml-3">Website Beta</div>
      </CustomLink>
    </section>
  )
}
