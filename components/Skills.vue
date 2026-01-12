<template>
  <section class="px-6 md:px-20 py-20 bg-slate-800 text-white">
    <h2 class="text-3xl font-bold mb-8 animate-fadeIn">Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center bg-white/5 backdrop-blur-md p-4 rounded-xl hover:scale-105 transition animate-fadeIn">
        <img :src="skill.icon" class="w-12 h-12 mb-2" />
        <span>{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Nuxt 3', icon: '/icons/nuxt.svg' },
  { name: 'Vue 3', icon: '/icons/vue.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'JavaScript', icon: '/icons/js.svg' },
  { name: 'HTML & CSS', icon: '/icons/html.svg' },
  { name: 'REST APIs', icon: '/icons/api.svg' }
]
</script>
