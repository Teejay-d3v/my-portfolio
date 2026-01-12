<template>
  <section id="projects" class="px-6 md:px-20 py-20">
    <h2 class="text-3xl font-bold mb-8">Projects</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:-translate-y-2 transition"
      >
        <h3 class="text-xl font-semibold mb-2">
          {{ project.title }}
        </h3>
        <p class="text-gray-300 mb-4">
          {{ project.description }}
        </p>

        <div class="flex gap-4 text-primary">
          <a :href="project.demo" target="_blank">Live</a>
          <a :href="project.github" target="_blank">Code</a>
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
    github: '#'
  },
  {
    title: 'Admin Dashboard',
    description: 'Responsive dashboard UI built with Vue & Tailwind.',
    demo: '#',
    github: '#'
  }
]
</script>
