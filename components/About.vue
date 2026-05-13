<template>
  <section id="about" class="portfolio-section">
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
      <!-- Section Header -->
      <div class="text-center mb-12 animate-fadeInUp">
        <div class="section-badge mx-auto">
          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          <span>Who I Am</span>
        </div>
        <h2 class="section-title">
          How I <span>Build</span>
        </h2>
        <p class="section-subtitle mt-4">
          I combine practical engineering, thoughtful UI decisions, and production-minded delivery.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Profile -->
        <div class="lg:col-span-4 animate-fadeInUp">
          <div class="sticky top-24">
            <div class="portfolio-card overflow-hidden p-5">
              <div class="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-950/70">
                <img
                  src="/images/bg-vue2.png"
                  alt="Vue and Nuxt themed workspace visual"
                  class="aspect-square w-full object-cover opacity-80"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-sm font-semibold text-white">Timothy John Lozada</p>
                  <p class="text-xs text-slate-300">Frontend Developer</p>
                </div>
              </div>

              <div class="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div
                  v-for="item in profileStats"
                  :key="item.label"
                  class="rounded-lg border border-slate-700/70 bg-slate-900/70 p-3"
                >
                  <div class="text-lg font-bold text-cyan-300">{{ item.value }}</div>
                  <div class="text-xs text-slate-400">{{ item.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Center: Bio -->
        <div class="lg:col-span-8 space-y-6 animate-fadeInUp delay-100">
          <div class="portfolio-card p-6 md:p-8">
            <h3 class="text-2xl font-bold text-white mb-4">
              Frontend developer for interfaces people can actually use
            </h3>
            
            <p class="text-gray-300 leading-relaxed mb-6">
              I'm a frontend developer with <span class="text-blue-400 font-semibold">3+ years of experience</span>
              building responsive web applications with Vue and Nuxt. I care about interfaces that are easy to scan,
              quick to load, and straightforward for real users to operate.
            </p>

            <p class="text-gray-300 leading-relaxed mb-6">
              I specialize in <span class="text-blue-400 font-semibold">Vue.js</span> and 
              <span class="text-blue-400 font-semibold">Nuxt.js</span>, with experience across dashboards,
              API-driven apps, and polished portfolio/product pages. My usual focus is turning ideas into maintainable
              components with clear structure and reliable behavior.
            </p>

            <div class="grid gap-4 sm:grid-cols-2">
              <div v-for="item in bioItems" :key="item.title" class="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4">
                <div class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-200">
                  {{ item.icon }}
                </div>
                <h4 class="font-semibold text-white">{{ item.title }}</h4>
                <p class="mt-2 text-sm leading-6 text-slate-400">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const floatingElements = useFloatingElements(8, 14, 0.35)

const profileStats = ref([
  { label: 'Experience', value: '4+' },
  { label: 'Focus', value: 'Vue' },
  { label: 'Based in', value: 'PH' }
])

const bioItems = ref([
  {
    icon: '01',
    title: 'Component-first builds',
    description: 'I break interfaces into reusable Vue components with predictable props, clean state, and readable templates.'
  },
  {
    icon: '02',
    title: 'Responsive by default',
    description: 'I design layouts for real device sizes, not just desktop previews, so pages stay usable on mobile.'
  },
  {
    icon: '03',
    title: 'API-aware UI',
    description: 'I build loading, empty, success, and error states around actual data flows instead of static mockups.'
  },
  {
    icon: '04',
    title: 'Deployment mindset',
    description: 'I keep Nuxt, Vercel, assets, routing, and runtime config in mind while building the interface.'
  }
])

</script>
