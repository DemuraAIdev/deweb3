async function getLatestBuilds(projectId: string, count: number = 5) {
  const response = await fetch(
    `https://api.vercel.com/v12/projects/${projectId}/deployments?limit=${count}`
  )
  const data = await response.json()
  const builds = data.deployments.map((deployment: any) => ({
    id: deployment.uid,
    url: deployment.url,
    status: deployment.readyState,
    created: deployment.created,
  }))
  return builds
}
