import { genPageMetadata } from '../seo'
import projectsData from '@/data/ProjectsData'
import Card from '@/components/ProjectCard'
import { FaGear } from 'react-icons/fa6'

export const metadata = genPageMetadata({ title: 'Projects' })
export default async function Projects() {
  return (
    <>
      <div className="mb-4 space-y-2 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ">
          Project <FaGear className="inline-block hover:animate-spin" />
        </h1>
        <p className=" leading-7 text-gray-500 dark:text-gray-400">
          My project that I have done. I hope you like it. This project showcases my skills in web
          development and design. I have also contributed to open source projects .
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              discontinued={d.discontinued}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}
