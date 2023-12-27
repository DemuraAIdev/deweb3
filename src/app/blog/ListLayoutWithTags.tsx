/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from '@/lib/formatDate'
import { CoreContent } from '@/lib/utils'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
// import siteMetadata from '@/data/siteMetadata'
import config from '@/data/config'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This is my blog where I write about things that I find interesting.
          </p>
        </div>
        <div className="flex sm:space-x-24">
          <div>
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path} className="py-5">
                    <Link href={`/${path}`}>
                      <article className="flex flex-col space-y-2 xl:space-y-0">
                        <h2 className="text-lg font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                          {title}
                        </h2>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date, config.locale)}</time>
                          </dd>
                        </dl>
                      </article>
                    </Link>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
