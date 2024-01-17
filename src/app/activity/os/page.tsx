import { OpratingSystems } from '@/lib/wakatime'
export default async function ActivityPage() {
  const { data } = await OpratingSystems()
  return (
    <div>
      <div className="">
        {data.map((item) => (
          <pre className="flex items-center justify-between" key={item.name}>
            <div className="flex w-44 shrink-0 items-center gap-x-2">
              <div
                className="h-1 w-1 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />
              {item.name}
            </div>
            <div className=" hidden h-1 w-full rounded bg-neutral-600 md:block">
              <div
                className="h-1 rounded border border-b-4 border-neutral-700 dark:border-neutral-200"
                style={{
                  width: `${item.percent}%`,
                }}
              />
            </div>
            <code className="text-muted-foreground ml-4 w-32 shrink-0 text-end !text-sm md:ml-0">
              {item.percent}%
            </code>
          </pre>
        ))}
      </div>
    </div>
  )
}
