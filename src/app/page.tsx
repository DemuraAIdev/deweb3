import TypedBios from '@/components/typed'
import SectionMini from '@/components/Skills'
import Commits from '@/components/Commits'

export default async function Home() {
  return (
    <>
      <div className="h-screen space-y-2 pb-8 pt-5 md:space-y-5 md:lg:mt-20 ">
        <div
          className="animate-text bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA]
            bg-clip-text
            text-transparent
            "
        >
          <h1 className="tracking-tightest my-20 select-none text-6xl font-bold leading-none sm:my-10 sm:text-7xl ">
            Abdul Vaiz Vahry Iskandar
          </h1>
        </div>
        <div className="rounded-lg border-2 border-dotted border-gray-600 p-5 ">
          <TypedBios />
          <p className="hover text-lg leading-7 text-black dark:text-gray-400 ">
            I am a website developer, bot, graphic designer. I learned to make a website from 2019
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute -left-4 top-0 hidden h-80 w-80 animate-blob rounded-full bg-[#5bb8e9] opacity-60 blur-3xl md:block"></div>
        <div className="animation-delay-2000 absolute -right-4 top-0 hidden h-80 w-80 animate-blob rounded-full bg-[#6EE7B7] opacity-60 blur-3xl md:block "></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-40 hidden h-80 w-80 animate-blob rounded-full bg-[#3B82F6] opacity-60 blur-3xl md:block"></div>
      </div>
      <SectionMini />
      <Commits />
    </>
  )
}
