import Header from './Header'
import { FaComputer } from 'react-icons/fa6'
export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" mb-4 space-y-2 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          Uses <FaComputer className="inline-block" />
        </h1>
      </div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
