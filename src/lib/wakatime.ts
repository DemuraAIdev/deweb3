import * as Wakatime from '@/types/Wakatime'

export const WeekleCodingActivity = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/3fdbe5d5-2d24-431d-944e-563b37075f84.json'
  )
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const Languages = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/bbf2a61a-2021-4b88-91bc-9458938c73ce.json'
  )
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}

export const OpratingSystems = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/bef4f887-9064-4b8e-9731-c541acb5ff44.json'
  )
  return res.json() as Promise<Wakatime.WeeklyOperatingSystems>
}

export const Editors = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/31c3563d-6d6e-4383-871b-a3387610a8b7.json'
  )
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}

export const Categories = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/709b9eb3-0736-4f26-897b-65eafea70bda.json'
  )
  return res.json() as Promise<Wakatime.WeeklyCategories>
}
