<template>
  <section class="px-6 md:px-20 py-20">
    <h2 class="text-3xl font-bold mb-8">Skills</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="skill in skills"
        :key="skill"
        class="bg-white/5 backdrop-blur-md p-4 rounded-xl text-center hover:scale-105 transition"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'Nuxt 3',
  'Vue 3',
  'JavaScript',
  'Tailwind CSS',
  'HTML & CSS',
  'REST APIs',
  'GitHub',
  'Responsive Design'
]
</script>
