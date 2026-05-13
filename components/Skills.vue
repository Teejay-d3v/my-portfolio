<template>
  <section class="portfolio-section">
    <!-- Overlay -->
    <div class="section-overlay"></div>

    <!-- Floating elements - matching other sections -->
    <div class="floating-elements">
      <div
        v-for="element in floatingElements"
        :key="element.id"
        class="floating-circle"
        :style="element.style"
      ></div>
    </div>

    <!-- Grid pattern - matching other sections -->
    <div class="absolute inset-0 grid-pattern opacity-30"></div>

    <!-- Content -->
    <div id="skills" class="section-anchor relative z-10 w-full">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <!-- Section Header - matching other sections -->
        <div class="text-center mb-12 animate-fadeInUp">
          <div class="section-badge mx-auto">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
            <span>Expertise</span>
          </div>
          <h2 class="section-title">
            Technical <span>Skills</span>
          </h2>
          <p class="section-subtitle mt-4">
            Technologies and tools I use to build production-ready applications
          </p>
        </div>

        <!-- Skills Grid - Professional Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(category, index) in skillCategories"
            :key="category.name"
            class="portfolio-card p-6 animate-fadeInUp transition-all duration-300 hover:border-blue-400/50"
            :class="`delay-${index * 100}`"
          >
            <!-- Category Header -->
            <div class="flex items-center gap-3 mb-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                <span class="text-sm font-bold text-cyan-200">{{ category.icon }}</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white">{{ category.name }}</h3>
                <p class="text-sm text-slate-400">{{ category.summary }}</p>
              </div>
            </div>

            <!-- Skills List -->
            <div class="flex flex-wrap gap-2">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="rounded-lg border border-slate-700/70 bg-slate-950/45 px-3 py-2"
              >
                <span class="text-sm font-medium text-slate-200">{{ skill.name }}</span>
              </div>
            </div>

            <!-- Category Stats -->
            <div class="mt-6 border-t border-white/10 pt-4">
              <p class="text-sm leading-6 text-slate-400">{{ category.outcome }}</p>
            </div>
          </div>
        </div>

        <!-- Professional Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp delay-300">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="portfolio-card p-6 text-center hover:border-blue-400/30 transition-all duration-300"
          >
            <div class="text-3xl font-bold text-blue-400 mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Workflow Section -->
        <div class="mt-16 portfolio-card p-8 animate-fadeInUp delay-400">
          <div class="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <!-- Icon -->
            <div>
              <div class="mb-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
              <svg class="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
              <h4 class="text-xl font-semibold text-white">Frontend workflow</h4>
              <p class="mt-2 text-sm leading-6 text-gray-400">How I move from idea to deployed interface.</p>
            </div>

            <!-- Content -->
            <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="step in workflow"
                  :key="step.name"
                  class="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4"
                >
                  <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{{ step.kicker }}</span>
                  <h5 class="mt-2 font-semibold text-white">{{ step.name }}</h5>
                  <p class="mt-2 text-sm leading-6 text-slate-400">{{ step.description }}</p>
                </div>
            </div>
          </div>
        </div>

        <!-- Tool Ecosystem -->
        <div class="mt-16 animate-fadeInUp delay-500">
          <h3 class="text-lg font-semibold text-white text-center mb-6">Development Ecosystem</h3>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="tool in tools"
              :key="tool.name"
              class="px-4 py-2 glass-light rounded-lg text-sm text-gray-300 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300 cursor-default"
            >
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const floatingElements = useFloatingElements(12)

const skillCategories = ref([
  {
    name: 'Frontend Development',
    icon: 'FE',
    summary: 'Interfaces, components, and UI behavior',
    outcome: 'I build responsive pages and component systems that are easy to extend.',
    skills: [
      { name: 'Vue 3' },
      { name: 'Nuxt 3' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 / CSS3' }
    ]
  },
  {
    name: 'Product UI',
    icon: 'API',
    summary: 'Data states, forms, and dashboard screens',
    outcome: 'I handle loading, empty, error, and success states so apps feel complete.',
    skills: [
      { name: 'REST APIs' },
      { name: 'Forms' },
      { name: 'Auth UI' },
      { name: 'Dashboards' },
      { name: 'Tables' },
      { name: 'Supabase' }
    ]
  },
  {
    name: 'Delivery',
    icon: 'DEV',
    summary: 'Build tooling, deployment, and maintainability',
    outcome: 'I keep projects organized so they are easier to ship, debug, and improve.',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Vercel' },
      { name: 'Vite' },
      { name: 'Vitest' },
      { name: 'Postman' },
      { name: 'Chrome DevTools' }
    ]
  }
])

const stats = ref([
  { value: '2', label: 'Web Dev Employers' },
  { value: '4+', label: 'Years Experience' },
  { value: 'Frontend', label: 'Primary Focus' },
  { value: 'Full-time', label: 'Work Experience' }
])

const workflow = ref([
  {
    kicker: '01',
    name: 'Structure',
    description: 'Map sections, components, data shape, and reusable UI before styling.'
  },
  {
    kicker: '02',
    name: 'Build',
    description: 'Create responsive Vue/Nuxt components with clean state and clear templates.'
  },
  {
    kicker: '03',
    name: 'Polish',
    description: 'Tighten spacing, interaction states, loading states, and mobile behavior.'
  },
  {
    kicker: '04',
    name: 'Ship',
    description: 'Check build output, assets, routes, environment variables, and deployment behavior.'
  }
])

const tools = ref([
  { name: 'Figma' },
  { name: 'Vercel' },
  { name: 'Netlify' },
  { name: 'GitHub Actions' },
  { name: 'ESLint' },
  { name: 'Prettier' },
  { name: 'Husky' },
  { name: 'pnpm' },
  { name: 'Chrome DevTools' },
  { name: 'Insomnia' }
])
</script>

<style scoped>
.h-1\.5 {
  transition: width 1s ease-in-out;
}

.portfolio-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card:hover {
  transform: translateY(-2px);
}

.group:hover .group-hover\:opacity-100 {
  transition: opacity 0.2s ease;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #0891b2);
}

.glass-light {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.delay-0 { animation-delay: 0ms; }
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

@media (max-width: 768px) {
  .portfolio-card {
    padding: 1.25rem;
  }
}
</style>
