'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 text-center">
      <h1 className="text-9xl font-bold">500?</h1>
      <h2 className="text-6xl font-medium">Something went wrong!</h2>
      <p className="text-2xl font-light">The page you are looking for does not exist.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
