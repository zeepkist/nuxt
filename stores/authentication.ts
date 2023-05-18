import { Authentication } from '~/types'
import { refresh } from '~/services/gtr'

export const useAuthenticationStore = defineStore({
  id: 'authentication',
  state: (): Authentication =>
    ({
      UserId: undefined,
      SteamId: undefined,
      AccessToken: undefined,
      AccessExpiry: undefined,
      RefreshToken: undefined,
      RefreshExpiry: undefined
    }),
  actions: {
    login(auth: Authentication) {
      this.UserId = auth.UserId
      this.SteamId = auth.SteamId
      this.AccessToken = auth.AccessToken
      this.AccessExpiry = auth.AccessExpiry
      this.RefreshToken = auth.RefreshToken
      this.RefreshExpiry = auth.RefreshExpiry
    },
    logout() {
      this.UserId = undefined
      this.SteamId = undefined
      this.AccessToken = undefined
      this.AccessExpiry = undefined
      this.RefreshToken = undefined
      this.RefreshExpiry = undefined
    },
    async refresh() {
      console.debug('Refreshing token')
      if (this.RefreshExpiry && new Date(this.RefreshExpiry) < new Date()) {
        console.debug('Refresh token expired, logging out')
        this.logout()
      } else if (this.RefreshToken && this.SteamId) {
        console.debug('Refresh token valid, refreshing')
        this.login(await refresh(this.SteamId, this.RefreshToken))
      } else {
        console.debug('No refresh token, logging out')
        this.logout()
      }
    }
  },
  persist: true
})
