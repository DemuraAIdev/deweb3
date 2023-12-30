export const WeekleCodingActivity = async () => {
  const res = await fetch(
    'https://wakatime.com/share/@DemuraAIdev/3fdbe5d5-2d24-431d-944e-563b37075f84.json'
  )
  const data = await res.json()
  return data
}
