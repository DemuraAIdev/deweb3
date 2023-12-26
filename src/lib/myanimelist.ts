const client_id = process.env.MAL_CLIENT_ID
const client_secret = process.env.MAL_CLIENT_SECRET

const auth_url = 'https://myanimelist.net/v1/oauth2/authorize'

const url_endpoint = 'https://api.myanimelist.net/v2'

// authentification
const auth = async () => {
  const response = await fetch(auth_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: client_id!,
      client_secret: client_secret!,
      code: 'code',
      code_verifier: 'code_verifier',
      grant_type: 'authorization_code',
    }),
  })

  return response.json()
}

// get user's profile

// get user's anime list

export const getAnimeList = async () => {
  const { access_token } = await auth()

  return fetch(`${url_endpoint}/users/@me/animelist`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

// get user's manga list

export const getMangaList = async () => {
  const { access_token } = await auth()

  return fetch(`${url_endpoint}/users/@me/mangalist`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export interface Anime {
  node: {
    id: number
    title: string
    main_picture: {
      medium: string
    }
  }
  list_status: {
    status: string
    score: number
    num_episodes_watched: number
    is_rewatching: boolean
    updated_at: string
  }
}
