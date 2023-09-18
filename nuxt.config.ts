// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: {
		strict: true,
		typeCheck: true
	},

	experimental: {
		reactivityTransform: true
	},

	imports: {
		dirs: ['./stores']
	},

	modules: [
		//'@nuxtjs/eslint-module',
		'@nuxtjs/color-mode',
		'@nuxtjs/fontaine',
		'@nuxt/content',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'nuxt-typed-router'
	],

	content: {
		highlight: {
			theme: 'min-dark',
			preload: ['json', 'ini']
		}
	},

	colorMode: {
		fallback: 'dark'
	},

	devtools: {
		enabled: true
	},

	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate']
	}
})
