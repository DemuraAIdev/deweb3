import { genPageMetadata } from '@/app/seo'
import TranslateC from './Translate'
import ReverseTranslate from './ReverseTranslate'

export const metadata = genPageMetadata({
  title: 'Lang G',
  description:
    'Bahasa G adalah sebuah bahasa rahasia yang populer di kalangan pelajar generasi 90-an di Indonesia.',
})

export default function LangG() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ">
        Lang G
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Bahasa G adalah sebuah bahasa rahasia yang populer di kalangan pelajar generasi 90-an di
        Indonesia.
      </p>

      <h3 className="text-medium font-medium tracking-tight text-gray-900 dark:text-gray-100 ">
        Ubah Kata ke Bahasa G
      </h3>
      <TranslateC />
      <h3 className="text-medium font-medium tracking-tight text-gray-900 dark:text-gray-100 ">
        Ubah Bahasa G ke Kata
      </h3>
      <ReverseTranslate />
    </>
  )
}
