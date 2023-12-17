interface Commit {
  sha: string
  message: string
  date: string
  url: string
  time: string
  avatar?: string
  html_url?: string
}

export async function getLatestCommits(username: string, repo: string): Promise<Commit[]> {
  const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
  const commitsData = await response.json()
  const commits: Commit[] = []

  for (const commitData of commitsData.slice(0, 3)) {
    const commit = commitData.commit
    commits.push({
      sha: commitData.sha,
      message: commit.message,
      date: commit.author.date,
      url: commit.url,
      time: new Date(commit.author.date).toLocaleDateString('id-ID', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      avatar: commitData.author?.avatar_url,
      html_url: commitData.html_url,
    })
  }

  return commits
}
