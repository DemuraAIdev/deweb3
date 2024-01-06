import Link from '@/components/Link'
export default function Page() {
  return (
    <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 text-center">
      <h1 className="text-5xl font-bold sm:text-9xl">
        ~({'>'}_{'<'}。)＼
      </h1>
      <h2 className="text-6xl font-medium">Maintenance</h2>
      <p className="text-2xl font-light">Can you wait for a year lol?.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  )
}
