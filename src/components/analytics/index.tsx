import UmamiScript from './umami'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
export default function analytics() {
  return (
    <>
      <UmamiScript />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
