<template>
  <section id="about"  class="portfolio-section">
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
        <h2  class="section-title">
          About <span>Me</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Profile -->
        <div class="lg:col-span-4 animate-fadeInUp">
          <div class="sticky top-24">
            <div class="relative group">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              <div class="relative glass-dark rounded-2xl overflow-hidden aspect-square">
                <div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <svg class="w-1/2 h-1/2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div class="absolute bottom-4 right-4">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Center: Bio -->
        <div  class="lg:col-span-5 space-y-6 animate-fadeInUp delay-100">
          <div class="portfolio-card p-8">
            <h3 class="text-2xl font-bold text-white mb-4">
              Frontend Developer with a Creative Touch
            </h3>
            
            <p class="text-gray-300 leading-relaxed mb-6">
              I'm a passionate frontend developer with <span class="text-blue-400 font-semibold">3+ years of experience</span> 
              building modern web applications. My journey in web development started with a curiosity for creating 
              beautiful, functional interfaces, and has evolved into a career focused on delivering exceptional user experiences.
            </p>

            <p  class="text-gray-300 leading-relaxed mb-6">
              I specialize in <span class="text-blue-400 font-semibold">Vue.js</span> and 
              <span class="text-blue-400 font-semibold">Nuxt.js</span>, but I'm always eager to learn new technologies 
              and approaches. I believe in writing clean, maintainable code and creating applications that are both 
              performant and accessible.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <div v-for="item in bioItems" :key="item.label" class="flex items-center gap-3 p-3 glass-light rounded-lg">
                <span class="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-cyan-400/35 bg-cyan-500/10 px-1 text-xs font-semibold tracking-wide text-cyan-300">
                  {{ item.icon }}
                </span>
                <div>
                  <div class="text-xs text-gray-400">{{ item.label }}</div>
                  <div class="text-sm text-white font-semibold">{{ item.value }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Quick Facts -->
        <div class="lg:col-span-3 space-y-6 animate-fadeInUp delay-200">
          <div class="portfolio-card p-6">
            <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Quick Facts
            </h4>
            <ul class="space-y-3">
              <li v-for="fact in quickFacts" :key="fact" class="flex items-center gap-3 text-gray-300">
                <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span class="text-sm">{{ fact }}</span>
              </li>
            </ul>
          </div>

          <div class="portfolio-card p-6">
            <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Interests
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="interest in interests" :key="interest" 
                    class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                {{ interest }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const floatingElements = ref(
  Array.from({ length: 8 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${14 + i * 2}s linear infinite`,
      animationDelay: `${i * 0.35}s`
    }
  }))
)

const bioItems = ref([
  { icon: 'LOC', label: 'Location', value: 'Philippines' },
  { icon: 'EXP', label: 'Experience', value: '3+ Years' },
  { icon: 'PRO', label: 'Projects', value: '20+' },
  { icon: 'VUE', label: 'Specialty', value: 'Vue.js' }
])

const quickFacts = ref([
  'Vue.js Specialist',
  'Responsive Design Expert',
  'Performance Optimizer',
  'Clean Code Advocate',
  'Team Player',
  'Problem Solver'
])

const interests = ref([
  'Open Source',
  'UI/UX Design',
  'Web Performance',
  'New Technologies',
  'Gaming',
  'Music'
])
</script>
