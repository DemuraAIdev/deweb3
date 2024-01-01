import * as Wakatime from '@/types/Wakatime'

export const WeekleCodingActivity = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/eecd8b67-97fa-4618-9b90-13bc78ab104c.json',
    {
      next: { revalidate: 86400 },
    }
  )
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const Languages = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/3201cfbb-f2db-4b95-b9be-a624c91aacfd.json',
    {
      next: { revalidate: 86400 },
    }
  )
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}

export const OpratingSystems = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/733a58e0-46a6-4e41-859a-8a35c727db88.json',
    {
      next: { revalidate: 86400 },
    }
  )
  return res.json() as Promise<Wakatime.WeeklyOperatingSystems>
}

export const Editors = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/6005593a-737a-4a1f-ab1c-a617ca203c7e.json',
    {
      next: { revalidate: 86400 },
    }
  )
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}

export const Categories = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/c77d6d2f-644c-4ac1-825c-82f56eba6353.json',
    {
      next: { revalidate: 86400 },
    }
  )
  return res.json() as Promise<Wakatime.WeeklyCategories>
}
