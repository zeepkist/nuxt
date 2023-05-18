import ky from 'ky'

import type { Authentication } from '~/types'

const api = ky.create({
  prefixUrl: import.meta.env.PROD
    ? 'https://auth.zeepkist-gtr.com/external/'
    : '/api/auth/external/'
})

export const refresh = async (SteamId: string, RefreshToken: string) => {
  const response = await api.post('refresh', {
    json: { SteamId, RefreshToken }
  })
  return response.json() as Promise<Authentication>
}
