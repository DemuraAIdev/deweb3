'use client'
import Link from '@/components/Link'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Image from '@/components/Image'
import { Suspense } from 'react'
import CardMini from './Card'

export default function Anime() {
  const { data } = useSWR('/api/animelist/user_list?status=completed', fetcher)
  return (
    <div>
      <div className=" space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          Completed Watch
        </h1>
      </div>
      {/* Array List */}
      <div className="-m-4 flex flex-wrap">
        <Suspense
          fallback={
            <div className=" min-h-screen flex-col items-center justify-center text-center">
              Loading...
            </div>
          }
        >
          {data?.map((item) => (
            <CardMini
              key={item.node.id}
              title={item.node.title}
              picture={item.node.main_picture}
              score={item.list_status.score}
            />
          ))}
        </Suspense>
      </div>
    </div>
  )
}
