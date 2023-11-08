import CustomLink from "./Link";
export default function Parralax({ img, text }: { img: string; text: string }) {
  return (
    <>
      <ul className="grid grid-cols-1 divide-y list-none gap-7">
        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <div className="flex h-full flex-col justify-between  rounded-lg bg-[#F9F6EE] p-8 transition dark:bg-[url(/images/1.png)]  hover:bg-transparent">
            <div className="text-4xl font-bold bg-opacity-50 rounded-xl">
                <CustomLink href="/project">Project</CustomLink>
            </div>
            <p>Project yang saya kerjakan</p>
          </div>
        </li>
        <li
          className="transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
        >
          <div className="flex h-full flex-col justify-between  rounded-lg bg-[#F9F6EE] p-8 transition dark:bg-[url(/images/2.png)] hover:bg-transparent">
            <CustomLink
              href="/blog"
              className="text-4xl font-bold bg-opacity-50 rounded-xl"
            >
              Blog
            </CustomLink>
            <p>Tulisan yang saya tulis</p>
          </div>
        </li>
      </ul>
    </>
  );
}
