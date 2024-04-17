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
        {/* <svg
          id="visual"
          viewBox="0 0 900 450"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="absolute inset-x-0 hidden w-full md:block"
        >
          <path
            d="M0 118L90 118L90 103L180 103L180 153L270 153L270 133L360 133L360 112L450 112L450 138L540 138L540 155L630 155L630 75L720 75L720 116L810 116L810 61L900 61"
            fill="none"
            stroke-linecap="square"
            stroke-linejoin="miter"
            stroke="#1a1818"
            stroke-width="12"
          ></path>
        </svg> */}
        <svg
          id="visual"
          viewBox="0 0 900 450"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="absolute inset-x-0 hidden w-full md:block"
        >
          <path
            d="M0 118L15 115.5C30 113 60 108 90 113.8C120 119.7 150 136.3 180 141.3C210 146.3 240 139.7 270 132.8C300 126 330 119 360 119.8C390 120.7 420 129.3 450 136.5C480 143.7 510 149.3 540 138.8C570 128.3 600 101.7 630 95.2C660 88.7 690 102.3 720 100C750 97.7 780 79.3 810 72.2C840 65 870 69 885 71L900 73"
            fill="none"
            strokeLinecap="round"
            stroke-linejoin="miter"
            stroke="#1a1818"
            stroke-width="20"
          ></path>
        </svg>
      </div>
      <SectionMini />
      {/* <svg
        id="visual"
        viewBox="0 0 900 450"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="absolute inset-x-0 z-0 hidden w-full md:block"
      >
        <path
          d="M0 330L90 330L90 345L180 345L180 295L270 295L270 315L360 315L360 336L450 336L450 310L540 310L540 293L630 293L630 373L720 373L720 332L810 332L810 387L900 387"
          fill="none"
          stroke-linecap="square"
          stroke-linejoin="miter"
          stroke="#1a1818"
          stroke-width="12"
        ></path>
      </svg> */}

      <Commits />
    </>
  )
}
