import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 text-center">
      <h1 className="text-5xl font-bold sm:text-9xl">
        ~({'>'}_{'<'}。)＼
      </h1>
      <h2 className="text-6xl font-medium">Blog Not Found</h2>
      <p className="text-2xl font-light">The Blog you are looking for does not exist.</p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Go back to List
      </Link>
    </div>
  )
}
