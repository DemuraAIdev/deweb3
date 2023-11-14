export default function loading() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-t-4 border-gray-200"></div>
        <div className="mt-4 text-xl font-semibold">Loading...</div>
      </div>
    </>
  )
}
