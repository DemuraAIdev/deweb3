import UmamiScript from './umami'
import { SpeedInsights } from '@vercel/speed-insights/next'
export default function analytics() {
  return (
    <>
      <UmamiScript />
      <SpeedInsights />
    </>
  )
}
