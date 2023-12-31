'use client'

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import CardMini from './Card'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useSWR(`/api/animelist/getinfo/${params.id}`, fetcher)

  if (data?.error === 'not_found') {
    return <h1>404 - Not Found</h1>
  }

  return (
    <div>
      <div className=" space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          {data?.title}
        </h1>
        {/* alternate title */}
        <p className="font-semibold leading-7 text-gray-500 dark:text-gray-400">
          {data?.alternative_titles?.ja}
        </p>
      </div>
      <div className="flex">
        <CardMini data={data} />
      </div>
      <div className="space-y-3">
        <h2 className=" text-3xl font-semibold">Synopsis </h2>
        <p className="mt-3 font-sans">{data?.synopsis}</p>
        <h2 className=" text-3xl font-semibold">Background </h2>
        {data?.background ? <p className="mt-3 font-sans">{data?.background}</p> : <p>No data</p>}
      </div>
    </div>
  )
}
