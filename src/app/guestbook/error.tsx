'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 text-center">
      <h2 className="text-6xl font-medium">X﹏X</h2>
      <p className="text-2xl font-light">The page is fail to load contact me pls!.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
