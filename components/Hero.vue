<template>
  <section id="hero" class="portfolio-section">
    <!-- Overlay -->
    <div class="section-overlay"></div>
    
    <!-- Floating elements -->
    <div class="floating-elements">
      <div
        v-for="element in floatingElements"
        :key="element.id"
        class="floating-circle"
        :style="element.style"
      ></div>
    </div>

    <!-- Grid pattern -->
    <div class="absolute inset-0 grid-pattern opacity-30"></div>

    <!-- Content -->
    <div class="section-anchor relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <!-- Left Content -->
        <div class="space-y-8 text-center lg:text-left">
          <!-- Badge -->
          <div class="section-badge inline-flex mx-auto lg:mx-0">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Frontend developer available for selected projects</span>
          </div>

          <!-- Heading -->
          <div class="space-y-5 animate-fadeInUp">
            <h1 class="hero-title">
              Building fast, polished interfaces with <span>Vue and Nuxt</span>.
            </h1>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Timothy John Lozada - Frontend Developer
            </p>
          </div>

          <!-- Description -->
          <p class="max-w-2xl mx-auto text-lg leading-8 text-slate-300 animate-fadeInUp delay-100 lg:mx-0">
            I turn product ideas into responsive, maintainable web experiences. My work focuses on
            clean Vue components, practical UI systems, API-driven pages, and deployment-ready Nuxt apps.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start animate-fadeInUp delay-200">
            <a
              href="#projects"
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span class="relative z-10 flex items-center gap-2">
                View My Work
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
              <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            
            <a
              href="#contact"
              class="group px-8 py-4 glass-light text-white font-semibold rounded-xl hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Let's Talk
            </a>
          </div>

          <div class="flex flex-wrap justify-center gap-2 animate-fadeInUp delay-300 lg:justify-start">
            <span
              v-for="item in focusAreas"
              :key="item"
              class="rounded-full border border-slate-700/80 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300"
            >
              {{ item }}
            </span>
          </div>

          <!-- Stats -->
          <div class="grid max-w-xl gap-3 pt-2 mx-auto animate-fadeInUp delay-400 sm:grid-cols-2 lg:mx-0">
            <div v-for="stat in stats" :key="stat.label" class="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4 text-left">
              <div class="text-2xl font-bold text-cyan-300">{{ stat.value }}</div>
              <div class="mt-1 text-xs leading-5 text-slate-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="hidden lg:block animate-fadeInUp delay-200">
          <div class="relative">
            <div class="absolute -inset-6 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/5 blur-2xl"></div>
            
            <!-- Code window -->
            <div class="relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-950/80 shadow-[0_30px_90px_rgba(2,6,23,0.7)]">
              <div class="flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3">
                <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span class="text-xs text-gray-400">components/ExperienceCard.vue</span>
              </div>
              <div class="space-y-5 p-6">
                <div class="grid grid-cols-3 gap-3">
                  <div v-for="metric in buildMetrics" :key="metric.label" class="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div class="text-xl font-bold text-white">{{ metric.value }}</div>
                    <div class="mt-1 text-xs text-slate-400">{{ metric.label }}</div>
                  </div>
                </div>
                <pre class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-300"><span class="text-sky-400">const</span> stack = {
  framework: <span class="text-emerald-300">'Nuxt 3'</span>,
  styling: <span class="text-emerald-300">'Tailwind CSS'</span>,
  focus: [<span class="text-emerald-300">'UX'</span>, <span class="text-emerald-300">'performance'</span>, <span class="text-emerald-300">'maintainability'</span>]
}

<span class="text-sky-400">export</span> <span class="text-sky-400">default</span> ship(stack)</pre>
                <div class="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p class="text-sm font-semibold text-cyan-100">Current focus</p>
                  <p class="mt-1 text-sm text-slate-300">Dashboards, landing pages, API-driven apps, and Vue/Nuxt component systems.</p>
                </div>
              </div>
            </div>

            <!-- Floating icons -->
            <div class="absolute -top-4 -right-4 w-16 h-16 glass-gradient rounded-xl p-3 animate-float-slow">
              <svg class="w-full h-full" viewBox="0 0 128 128">
                <path fill="#41b883" d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" />
                <path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"/>
                <path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"/>
              </svg>
            </div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 glass-gradient rounded-xl p-3 animate-float-medium">
              <svg class="w-full h-full" viewBox="0 0 128 128">
                <path fill="#00dc82" d="M71.679 106.667h47.359c1.514 0 2.962-.533 4.268-1.283 1.307-.75 2.66-1.688 3.415-2.986.755-1.298 1.279-2.769 1.279-4.264s-.524-2.971-1.279-4.268l-32-55.038c-.755-1.297-1.68-2.24-2.99-2.991-1.312-.751-3.18-1.279-4.695-1.279-1.514 0-2.957.533-4.263 1.279-1.307.746-2.232 1.693-2.987 2.991l-8.108 14.08-16.213-27.311c-.755-1.297-1.68-2.66-2.986-3.41-1.307-.75-2.755-.854-4.269-.854-1.514 0-2.957.104-4.264.854-1.306.75-2.66 2.113-3.415 3.41L.854 93.864C.099 95.161 0 96.634 0 98.134c0 1.499.099 2.966.854 4.263.754 1.297 2.103 2.24 3.415 2.986 1.311.747 2.754 1.284 4.264 1.284H38.4c11.835 0 20.449-5.31 26.453-15.364l14.505-25.17 7.678-13.226 23.468 40.104H79.359ZM37.97 93.01H17.066l31.147-53.76L64 66.134 53.543 84.361c-3.986 6.523-8.533 8.65-15.572 8.65zm0 0"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeInUp delay-500">
        <a href="#about" class="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <span class="text-sm">Scroll to explore</span>
          <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7-7-7m14-6l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const floatingElements = useFloatingElements(12)

const focusAreas = ref([
  'Vue 3',
  'Nuxt 3',
  'Tailwind CSS',
  'Responsive UI',
  'API Integration'
])

const stats = ref([
  { value: '4+', label: 'Years of frontend experience' },
  { value: 'Vue/Nuxt', label: 'Primary production stack' }
])

const buildMetrics = ref([
  { value: 'SSR', label: 'Nuxt ready' },
  { value: 'A11y', label: 'Usable UI' },
  { value: 'DX', label: 'Clean code' }
])
</script>
