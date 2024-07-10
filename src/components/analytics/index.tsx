import UmamiScript from './umami'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import { Analytics } from '@vercel/analytics/react'
import PlausibleScript from './plausble'
export default function analytics() {
  return (
    <>
      <UmamiScript />
      {/* <SpeedInsights /> */}
      <PlausibleScript />
      {/* <Analytics /> */}
    </>
  )
}
