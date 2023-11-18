import CustomLink from './Link'

export default function Parralax({
  dictionary,
}: {
  dictionary: {
    project: string
    blog: string
    projectdesc: string
    blogdesc: string
  }
}) {
  return (
    <>
      <ul className="grid list-none grid-cols-1 gap-7 divide-y">
        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <CustomLink href="/projects" className="">
            <div className="flex h-full flex-col justify-between  rounded-lg bg-light p-8 transition hover:bg-transparent dark:bg-dark">
              <span className=" text-4xl font-bold">{dictionary.project}</span>
              <p>{dictionary.projectdesc}</p>
            </div>
          </CustomLink>
        </li>

        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <CustomLink href="/blog" className="">
            <div className="flex h-full flex-col justify-between  rounded-lg bg-light p-8 transition hover:bg-transparent dark:bg-dark">
              <span className=" text-4xl font-bold">{dictionary.blog}</span>
              <p>{dictionary.blogdesc}</p>
            </div>
          </CustomLink>
        </li>
      </ul>
    </>
  )
}
