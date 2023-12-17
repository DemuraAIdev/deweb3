import { genPageMetadata } from '../seo'
import projectsData from '@/data/ProjectsData'
import Card from '@/components/Card'

export const metadata = genPageMetadata({ title: 'Projects' })
export default async function Projects() {
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ">
          Project
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Project that im work</p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}
