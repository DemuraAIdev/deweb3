import { WeekleCodingActivity } from '@/lib/wakatime'
export default async function ActivityPage() {
  const { data } = await WeekleCodingActivity()

  const maxTotalSeconds = Math.max(...data.map((entry) => entry.grand_total.total_seconds))
  const minTotalSeconds = Math.min(...data.map((entry) => entry.grand_total.total_seconds))
  return (
    <div>
      <div className="">
        {data.reverse().map((item) => (
          <pre className="flex items-center justify-between" key={item.range.date}>
            <p className="flex w-44 shrink-0 items-center gap-x-2 ">{item.range.text}</p>
            <div className="bg-muted hidden h-1 w-full rounded md:block">
              <div
                className="h-1 rounded border-b-4 border-dashed border-neutral-700 dark:border-neutral-200"
                style={{
                  width: `${
                    ((item.grand_total.total_seconds - minTotalSeconds) /
                      (maxTotalSeconds - minTotalSeconds)) *
                    100
                  }%`,
                }}
              />
            </div>
            <code className="text-muted-foreground ml-4 w-32 shrink-0 text-end !text-sm md:ml-0">
              {item.grand_total.text}
            </code>
          </pre>
        ))}
      </div>
    </div>
  )
}
