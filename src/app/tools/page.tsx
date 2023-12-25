import CardMini from '@/components/CardMini'
import { genPageMetadata } from '../seo'
export const metadata = genPageMetadata({ title: 'Tools' })
export default async function Tools() {
  return (
    <>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">I'm Creating tools here</p>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          <CardMini href="/tools/langg" description="Bahasa G Translator" title="Lang G" />
        </div>
      </div>
    </>
  )
}
