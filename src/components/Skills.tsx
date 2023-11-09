import CustomLink from './Link'
export default function Parralax({ img, text }: { img: string; text: string }) {
  return (
    <>
      <ul className="grid list-none grid-cols-1 gap-7 divide-y">
        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <div className="flex h-full flex-col justify-between  rounded-lg bg-[#F9F6EE] p-8 transition hover:bg-transparent  dark:bg-[url(/images/1.png)]">
            <div className="rounded-xl bg-opacity-50 text-4xl font-bold">
              <CustomLink href="/project">Project</CustomLink>
            </div>
            <p>Project yang saya kerjakan</p>
          </div>
        </li>
        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <div className="flex h-full flex-col justify-between  rounded-lg bg-[#F9F6EE] p-8 transition hover:bg-transparent dark:bg-[url(/images/2.png)]">
            <CustomLink href="/blog" className="rounded-xl bg-opacity-50 text-4xl font-bold">
              Blog
            </CustomLink>
            <p>Tulisan yang saya tulis</p>
          </div>
        </li>
      </ul>
    </>
  )
}
