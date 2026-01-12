export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'vercel'
  },
  app: {
    head: {
      title: 'TJ Portfolio',
      meta: [
        { name: 'description', content: 'Frontend Developer Portfolio | Nuxt 3 & Tailwind CSS' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
