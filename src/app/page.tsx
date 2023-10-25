import TypedBios from '@/components/typed'

export default function Home() {
  return (

    <div className="space-y-2 pt-5 pb-8 md:space-y-5 md:h-screen lg:h-sreen md:lg:mt-20 lg:mt-20">
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
      <div className="border-dotted rounded-lg border-2 border-gray-500 p-5">
        <TypedBios />
        <p className="text-lg leading-7 text-black dark:text-gray-400">
          I am a website developer, bot, graphic designer, and nft artist. I learned to make a website from 2019
        </p>
      </div>
    </div>
  )
}
