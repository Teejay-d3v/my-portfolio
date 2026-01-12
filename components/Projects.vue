<template>
  <section id="projects" class="px-6 md:px-20 py-20 bg-slate-900 text-gray-300">
    <h2 class="text-3xl font-bold mb-8 animate-fadeIn">Projects</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Ghibli App Project -->
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition animate-fadeIn">
        <img src="/projects/ghibli-app.png" alt="Ghibli App screenshot" class="rounded-xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Ghibli App</h3>
        <p class="mb-4">
          Nuxt 3 app fetching Studio Ghibli movies from an API. Features pagination, search, and responsive design.
        </p>
        <div class="flex gap-4 text-primary">
          <a href="https://exam-ghibli-app.vercel.app/" target="_blank" class="hover:underline">Live Demo</a>
          <a href="https://github.com/Teejay-d3v/ghibli-app" target="_blank" class="hover:underline">Source Code</a>
        </div>
      </div>

      <!-- Fresh & Clean Helmet Project -->
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition animate-fadeIn delay-200">
        <img src="/projects/freshandclean-helmet.png" alt="Fresh & Clean Helmet screenshot" class="rounded-xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Fresh & Clean Helmet</h3>
        <p class="mb-4">
          A product catalog and ordering web app. Built with Nuxt 3 & Tailwind CSS, fully responsive and clean UI.
        </p>
        <div class="flex gap-4 text-primary">
          <a href="https://freshand-clean-helmet.vercel.app/" target="_blank" class="hover:underline">Live Demo</a>
          <a href="https://github.com/Teejay-d3v/freshandclean-helmet" target="_blank" class="hover:underline">Source Code</a>
        </div>
      </div>

      <!-- Nuxt Tables Project -->
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition animate-fadeIn delay-400">
        <img src="/projects/nuxt-tables.png" alt="Nuxt Tables screenshot" class="rounded-xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Nuxt Tables</h3>
        <p class="mb-4 text-sm sm:text-base">
          Explore interactive tables demonstrating modern web development skills using Nuxt 3 and Tailwind CSS. Each table showcases dynamic, persistent, and API-driven data handling with clean UI/UX design.
        </p>
        <div class="flex gap-4 text-primary">
          <a href="https://nuxt-tables.vercel.app/" target="_blank" class="hover:underline">Live Demo</a>
          <a href="https://github.com/Teejay-d3v/my-nuxt-tables" target="_blank" class="hover:underline">Source Code</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Optional: you can manage projects dynamically if you want
const projects = [
  {
    title: 'Studio Ghibli App',
    description: 'Nuxt app fetching movies from API with pagination.',
    demo: 'https://exam-ghibli-app.vercel.app/',
    github: 'https://github.com/Teejay-d3v/ghibli-app'
  },
  {
    title: 'Fresh & Clean Helmet',
    description: 'Product catalog and ordering web app.',
    demo: 'https://freshand-clean-helmet.vercel.app/',
    github: 'https://github.com/Teejay-d3v/freshandclean-helmet'
  },
  {
    title: 'Nuxt Tables',
    description: 'Interactive tables with Nuxt 3 & Tailwind CSS, showing dynamic, persistent, and API-driven data.',
    demo: 'https://nuxt-tables.vercel.app/',
    github: 'https://github.com/Teejay-d3v/my-nuxt-tables'
  }
]
</script>
