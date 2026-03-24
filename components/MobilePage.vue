<template>
  <main class="mx-auto max-w-md px-4 pb-24 pt-24 text-slate-100">
    <section id="hero" class="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-5 shadow-[0_20px_45px_rgba(2,6,23,0.45)]">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Frontend Developer</p>
      <h1 class="mt-2 text-2xl font-black leading-tight text-white">Hi, I'm Tjay</h1>
      <p class="mt-3 text-sm leading-relaxed text-slate-300">
        I craft performant Vue/Nuxt experiences focused on clean UX and production-ready code.
      </p>

      <div class="mt-4 grid grid-cols-2 gap-2 text-center">
        <div class="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
          <p class="text-xl font-bold text-cyan-300">4+</p>
          <p class="text-[11px] text-slate-400">Years Exp</p>
        </div>
        <div class="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
          <p class="text-xl font-bold text-cyan-300">20+</p>
          <p class="text-[11px] text-slate-400">Projects</p>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-2">
        <button
          @click="scrollToSection('projects')"
          class="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white"
        >
          View Work
        </button>
        <button
          @click="scrollToSection('contact')"
          class="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100"
        >
          Contact
        </button>
      </div>
    </section>

    <section id="about" class="mt-4 rounded-3xl border border-slate-800 bg-slate-900/75 p-5">
      <h2 class="text-lg font-bold text-white">About</h2>
      <p class="mt-2 text-sm leading-relaxed text-slate-300">
        I specialize in Vue 3 + Nuxt 3 development, building responsive interfaces with strong focus on performance,
        accessibility, and maintainability.
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="item in highlights"
          :key="item"
          class="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs text-slate-300"
        >
          {{ item }}
        </span>
      </div>
    </section>

    <section id="skills" class="mt-4 rounded-3xl border border-slate-800 bg-slate-900/75 p-5">
      <h2 class="text-lg font-bold text-white">Skills</h2>
      <div class="mt-3 grid grid-cols-2 gap-2">
        <div
          v-for="skill in topSkills"
          :key="skill.name"
          class="rounded-xl border border-slate-800 bg-slate-950/80 p-3"
        >
          <p class="text-sm font-semibold text-slate-100">{{ skill.name }}</p>
          <p class="mt-1 text-xs text-cyan-300">{{ skill.level }}</p>
        </div>
      </div>
    </section>

    <section id="projects" class="mt-4 rounded-3xl border border-slate-800 bg-slate-900/75 p-5">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold text-white">Projects</h2>
        <a href="https://github.com/Teejay-d3v" target="_blank" rel="noopener noreferrer" class="text-xs text-cyan-300">
          GitHub ↗
        </a>
      </div>

      <div class="mt-3 space-y-3">
        <article
          v-for="project in mobileProjects"
          :key="project.title"
          class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/85"
        >
          <img :src="project.image" :alt="project.title" class="h-32 w-full object-cover" />
          <div class="p-3">
            <h3 class="text-sm font-semibold text-white">{{ project.title }}</h3>
            <p class="mt-1 text-xs leading-relaxed text-slate-400">{{ project.description }}</p>
            <a
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 inline-flex text-xs font-semibold text-cyan-300"
            >
              Open project ↗
            </a>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="mt-4 rounded-3xl border border-slate-800 bg-slate-900/75 p-5">
      <h2 class="text-lg font-bold text-white">Contact</h2>
      <p class="mt-2 text-sm text-slate-300">Open for freelance and full-time opportunities.</p>

      <div class="mt-3 grid grid-cols-2 gap-2">
        <a href="mailto:timlozada5@gmail.com" class="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-center text-xs text-slate-200">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/timothy-john-lozada-b7461b248/"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-center text-xs text-slate-200"
        >
          LinkedIn
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const MOBILE_OFFSET = 108

const highlights = ['Vue/Nuxt', 'Tailwind CSS', 'API Integration', 'Clean Code']

const topSkills = [
  { name: 'Vue 3 / Nuxt 3', level: 'Intermediate+' },
  { name: 'TypeScript', level: 'Intermediate+' },
  { name: 'Tailwind CSS', level: 'Intermediate+' },
  { name: 'REST APIs', level: 'Intermediate+' },
]

const mobileProjects = [
  {
    title: 'Ghibli App',
    description: 'Movie discovery app with search and pagination.',
    image: '/projects/ghibli-app.png',
    demo: 'https://exam-ghibli-app.vercel.app/',
  },
  {
    title: 'Nuxt Tables',
    description: 'Sortable and filterable table interface for dashboards.',
    image: '/projects/nuxt-tables.png',
    demo: 'https://nuxt-tables.vercel.app/',
  },
  {
    title: 'Budget Planner',
    description: 'Finance tracker with categories and visual reports.',
    image: '/projects/budgetplanner.png',
    demo: 'https://budget-planner-azure.vercel.app/personal-budget-planner/',
  },
]

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (!section) return

  const top = Math.max(section.getBoundingClientRect().top + window.scrollY - MOBILE_OFFSET, 0)
  window.history.replaceState(null, '', `#${id}`)
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>