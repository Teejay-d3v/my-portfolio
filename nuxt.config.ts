export default defineNuxtConfig({
  compatibilityDate: '2026-03-30',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', '~/assets/css/portfolio.css'],
  nitro: {
    preset: 'vercel'
    // Remove the custom vercel.config and externals
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