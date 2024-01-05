import Script from 'next/script'

import { analytics } from '@/data/config'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={analytics.umami.websiteId}
        src={analytics.umami.url} // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
