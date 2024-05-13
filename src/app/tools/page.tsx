import CardMini from '@/components/CardMini'
import { genPageMetadata } from '../seo'
export const metadata = genPageMetadata({ title: 'Tools' })
export default async function Tools() {
  return (
    <>
      <p className="leading-7 text-gray-500 dark:text-gray-400">I'm Creating tools here</p>
      <div className="container  py-12">
        <div className="-m-4 flex flex-wrap">
          <CardMini href="/tools/langg" description="Bahasa G Translator" title="Lang G" />
          <CardMini
            href="https://anime.vahry.my.id/"
            description="MyAnimeList API wrapper"
            title="Search Nime"
          />
        </div>
      </div>
    </>
  )
}
