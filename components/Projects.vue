<template>
  <section id="projects" class="px-6 md:px-20 py-20 bg-slate-900 text-gray-300">
    <h2 class="text-3xl font-bold mb-8 animate-fadeIn">Projects</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.title" class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition animate-fadeIn">
        <img :src="project.image" alt="Project screenshot" class="rounded-xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="mb-4">{{ project.description }}</p>
        <div class="flex gap-4 text-primary">
          <a :href="project.demo" target="_blank" class="hover:underline">Live Demo</a>
          <a :href="project.github" target="_blank" class="hover:underline">Source Code</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Studio Ghibli App',
    description: 'Nuxt app fetching movies from API with pagination.',
    demo: '#',
    github: '#',
    image: '/projects/ghibli.png'
  },
  {
    title: 'Admin Dashboard',
    description: 'Responsive dashboard UI built with Vue & Tailwind.',
    demo: '#',
    github: '#',
    image: '/projects/dashboard.png'
  }
]
</script>
