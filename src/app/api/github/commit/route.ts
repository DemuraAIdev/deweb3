import { NextResponse } from 'next/server'
import { getLatestCommits } from '@/lib/github'

export async function GET() {
  const commits = await getLatestCommits('DemuraAIdev', 'deweb3')
  return NextResponse.json(commits)
}
