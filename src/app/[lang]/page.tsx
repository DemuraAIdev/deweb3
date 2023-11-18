import TypedBios from '@/components/typed'
import Skills from '@/components/Skills'
import Commits from '@/components/Commits'
import { SiNextdotjs, SiTailwindcss, SiVercel, SiGithub } from 'react-icons/si'
import { getDictionary } from '../../dictionaries'
import { Locale } from 'i18n-config'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  return (
    <>
      <div className="lg:h-sreen space-y-2 pb-8 pt-5 md:h-screen md:space-y-5 md:lg:mt-20 lg:mt-20">
        <div
          className="animate-text bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA]
            bg-clip-text
            text-transparent
            "
        >
          <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-7xl font-extrabold leading-none sm:my-10">
            Abdul Vaiz Vahry Iskandar
          </h1>
        </div>
        <div className="rounded-lg border-2 border-dotted border-gray-500 p-5 ">
          <TypedBios />
          <p className="hover text-lg leading-7 text-black dark:text-gray-400">
            I am a website developer, bot, graphic designer, and nft artist. I learned to make a
            website from 2019
          </p>
        </div>
      </div>
      <Skills />
      <Commits />
      <section className="pt-20">
        <h1 className=" text-center text-sm font-bold">{dictionary.home.powered}</h1>
        <div className="flex items-center justify-center gap-5 p-5 text-5xl">
          <SiNextdotjs />
          <SiTailwindcss />
          <SiVercel />
          <SiGithub />
        </div>
      </section>
    </>
  )
}
