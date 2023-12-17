import CustomLink from './Link'

export default function Parralax() {
  return (
    <>
      <ul className="grid list-none grid-cols-1 gap-7 divide-y">
        <li
          className="transform rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <CustomLink href="/projects">
            <div className="flex h-full flex-col justify-between  rounded-lg bg-white p-6 transition hover:bg-transparent dark:bg-dark">
              <span className=" text-3xl font-bold">Project</span>
              <p>Project that im work</p>
            </div>
          </CustomLink>
        </li>

        <li
          className="transform rounded-xl bg-gradient-to-r 
            from-[#3B82F6] via-[#FF9685]  to-[#F9F871] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <CustomLink href="/blog">
            <div className="flex h-full flex-col justify-between  rounded-lg bg-white p-6 transition hover:bg-transparent dark:bg-dark">
              <span className=" text-3xl font-bold">Blog</span>
              <p>Blog that i write</p>
            </div>
          </CustomLink>
        </li>
      </ul>
    </>
  )
}
