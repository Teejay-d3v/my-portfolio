export default defineNuxtConfig({
  compatibilityDate: '2026-03-30',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', '~/assets/css/portfolio.css'],
  nitro: {
    preset: 'vercel',
    vercel: {
      config: {
        version: 3,
        routes: [
          {
            src: '/_nuxt/builds/meta/(.*)',
            headers: {
              'cache-control': 'public, max-age=31536000, immutable'
            }
          },
          {
            src: '/_nuxt/builds/(.*)',
            headers: {
              'cache-control': 'public, max-age=1, immutable'
            }
          },
          {
            src: '/_nuxt/(.*)',
            headers: {
              'cache-control': 'public, max-age=31536000, immutable'
            }
          }
        ]
      }
    },
    externals: {
      inline: ['vue-bundle-renderer', '@vue/shared']
    }
  },
  runtimeConfig: {
    public: {
      emailjs: {
        serviceId: '',
        templateId: '',
        publicKey: ''
      }
    }
  },
  app: {
    head: {
      title: 'TJ Portfolio',
      meta: [
        { name: 'description', content: 'Frontend Developer Portfolio | Nuxt 3 & Tailwind CSS' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
