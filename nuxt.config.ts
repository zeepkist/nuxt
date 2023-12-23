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
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-typed-router',
        'radix-vue/nuxt'
    ],

    content: {
        highlight: {
            theme: 'min-dark',
            preload: ['json', 'ini']
        }
    },

    colorMode: {
        preference: 'system',
        fallback: 'dark',
        dataValue: 'theme'
    },

    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },

    nitro: {
        devProxy: {
            '/graphql/gtr': {
                target: 'https://graphql.zeepkist-gtr.com',
                changeOrigin: true
            },
            '/graphql/zworpshop': {
                target: 'https://graphql.zworpshop.com',
                changeOrigin: true
            }
        }
    }
})
