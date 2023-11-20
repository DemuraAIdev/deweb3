import Link from '@/components/Link'
import { headerNavLinks, ExternalLinks, OtherLinks } from '@/data/NavLinks'
import NowPlaying from '@/components/NowPlaying'
import LocaleSwitcher from './LangSwitch'
import { SiNextdotjs, SiTailwindcss, SiVercel, SiGithub } from 'react-icons/si'
export default function Footer({
  dictionary,
}: {
  dictionary: {
    navigation: string
    other: string
    external: string
    powered: string
  }
}) {
  return (
    <footer className="mt-10 ">
      <div className="mb-10">
        <NowPlaying />
      </div>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 md:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <p className="font-bold">{dictionary.navigation}</p>
          {headerNavLinks.map((link) => (
            <div key={link.title}>
              <Link
                href={link.href}
                className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-bold">{dictionary.other}</p>
          {OtherLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-bold">{dictionary.external}</p>
          {ExternalLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <section className="">
        <h1 className=" text-center text-sm font-bold">{dictionary.powered}</h1>
        <div className="flex items-center justify-center gap-2 p-2 text-2xl">
          <SiNextdotjs />
          <SiTailwindcss />
          <SiVercel />
          <SiGithub />
        </div>
      </section>
      <div className=" flex items-center justify-center space-x-2 text-sm text-black dark:text-gray-400">
        <div>Abdul Vaiz</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">Vahry Iskandar</Link>
      </div>
      <LocaleSwitcher />
    </footer>
  )
}
