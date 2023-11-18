import Link from '@/components/Link'
import { headerNavLinks, ExternalLinks, OtherLinks } from '@/data/NavLinks'
import NowPlaying from '@/components/NowPlaying'
import { getDictionary } from '@/dictionaries'
import { Locale } from 'i18n-config'

export default function Footer({
  dictionary,
}: {
  dictionary: {
    navigation: string
    other: string
    external: string
  }
}) {
  return (
    <footer className="mt-10 ">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <div className="mb-10">
        <NowPlaying />
      </div>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 md:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <p className="font-bold">{dictionary.navigation}</p>
          {headerNavLinks.map((link) => (
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
      <div className="mb-9 flex items-center justify-center space-x-2 text-sm text-black dark:text-gray-400">
        <div>Abdul Vaiz</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">Vahry Iskandar</Link>
      </div>
    </footer>
  )
}
