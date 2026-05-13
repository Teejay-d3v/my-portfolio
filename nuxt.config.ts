export default defineNuxtConfig({
  compatibilityDate: '2026-03-30',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', '~/assets/css/portfolio.css'],
  sourcemap: {
    client: false,
    server: false
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.message.includes('nuxt:module-preload-polyfill') &&
            warning.message.includes('Sourcemap is likely to be incorrect')
          ) {
            return
          }

          warn(warning)
        }
      }
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  runtimeConfig: {
    public: {
      emailjs: {
        serviceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        templateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        publicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
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
