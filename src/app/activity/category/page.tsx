import { Categories } from '@/lib/wakatime'
export default async function ActivityPage() {
  const { data } = await Categories()
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
            <div className="bg-muted hidden h-1 w-full rounded md:block">
              <div
                className="h-1 rounded border-b-4 border-dashed"
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
