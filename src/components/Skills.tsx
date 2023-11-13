import CustomLink from './Link'

export default function Parralax() {
  return (
    <>
      <ul className="grid list-none grid-cols-1 gap-7 divide-y">
        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <CustomLink href="/project" className="">
            <div className="flex h-full flex-col justify-between  rounded-lg bg-light p-8 transition hover:bg-transparent dark:bg-dark">
              <span className=" text-4xl font-bold">Project</span>
              <p>Proyek yang saya kerjakan</p>
            </div>
          </CustomLink>
        </li>

        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <CustomLink href="/blog" className="">
            <div className="flex h-full flex-col justify-between  rounded-lg bg-light p-8 transition hover:bg-transparent dark:bg-dark">
              <span className=" text-4xl font-bold">Blog</span>
              <p>Tulisan yang saya tulis</p>
            </div>
          </CustomLink>
        </li>
      </ul>
    </>
  )
}
