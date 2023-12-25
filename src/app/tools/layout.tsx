export default function Tools({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Tools
        </h1>
        {children}
      </div>
    </>
  )
}
