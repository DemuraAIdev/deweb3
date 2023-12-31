// make function to get userWatchAnime in API MyAnimeList using fetch

const client_id = process.env.MAL_CLIENT_ID
const client_secret = process.env.MAL_CLIENT_SECRET
const refresh_token = process.env.MAL_REFRESH_TOKEN

export interface UserWatchAnime {
  node: {
    id: number
    title: string
    main_picture: {
      medium: string
      large: string
    }
  }
  list_status: {
    status: string
    score: number
    num_episodes_watched: number
    is_rewatching: boolean
    updated_at: string
    start_date: string
  }
}

export const getAccessToken = async () => {
  const response = await fetch('https://myanimelist.net/v1/oauth2/token', {
    method: 'POST',

    body: new URLSearchParams({
      client_id: client_id!,
      client_secret: client_secret!,
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),

    next: { revalidate: 3600 },
  })

  return response.json()
}

export const getUserWatchAnime = async (status: string) => {
  const { access_token } = await getAccessToken()

  const animeList: UserWatchAnime[] = []

  let nextPage = `https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status`

  if (status) {
    nextPage += `&status=${status}`
  }

  const fetchAnimePage = async (pageUrl: string) => {
    const response = await fetch(pageUrl, {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 86400 },
    })

    const { data, paging } = await response.json()

    animeList.push(...data)

    return paging?.next
  }

  const fetchAllAnimePages = async () => {
    const pages: string[] = [] // Explicitly define the type of the 'pages' array as an array of strings

    while (nextPage) {
      pages.push(nextPage)
      nextPage = await fetchAnimePage(nextPage)
    }

    return pages
  }

  const allPages = await fetchAllAnimePages()
  const animeResponses = await Promise.all(allPages.map(fetchAnimePage))

  // Process any remaining anime responses if needed

  return animeList
}

export const getAnime = async (id: string) => {
  const { access_token } = await getAccessToken()

  const response = await fetch(`https://api.myanimelist.net/v2/anime/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'force-cache',
  })

  const data = await response.json()

  return data
}
