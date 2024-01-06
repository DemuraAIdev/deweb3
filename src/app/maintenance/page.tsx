'use client'
import { useRouter } from 'next/navigation'
export default function Page() {
  const { refresh } = useRouter()
  return (
    <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 text-center">
      <h1 className="text-5xl font-bold sm:text-9xl">
        ~({'>'}_{'<'}。)＼
      </h1>
      <h2 className="text-6xl font-medium">Maintenance</h2>
      <p className="text-2xl font-light">Can you wait for a year lol?.</p>
      <button onClick={() => refresh()} className="text-blue-500 hover:underline">
        Try again
      </button>
    </div>
  )
}
