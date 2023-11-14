import { NextResponse } from 'next/server'
import { getLatestCommits } from '@/lib/github'

export const revalidate = 60

export async function GET() {
  const commits = await getLatestCommits('DemuraAIdev', 'deweb3')
  return NextResponse.json(commits)
}
