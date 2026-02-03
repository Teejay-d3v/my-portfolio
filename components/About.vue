<template>
  <section
    id="about"
    class="relative py-16 md:py-20 flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden"
  >
    <!-- Base Dark Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Animated floating elements -->
    <div class="absolute inset-0">
      <div v-for="i in 8" :key="i" 
           class="absolute w-48 h-48 border border-blue-400/10 rounded-full"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animation: `float ${15 + i * 2}s linear infinite`,
             animationDelay: `${i * 0.5}s`
           }"></div>
    </div>

    <!-- Main Container - Wider and more compact -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        <!-- Left Column: Profile Image (3 columns wide) -->
        <div class="lg:col-span-3 flex flex-col items-center animate-fadeIn">
          <div class="relative group w-full max-w-xs">
            <div class="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-15 blur-lg group-hover:opacity-20 transition-opacity duration-500"></div>
            <div
              class="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl group-hover:border-blue-400/50 transition-all duration-500 transform group-hover:scale-105"
            >
              <div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <svg class="w-3/5 h-3/5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            
            <!-- Online status indicator -->
            <div class="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 shadow-lg animate-pulse"></div>
          </div>
        </div>

        <!-- Center Column: About Content (6 columns wide) -->
        <div class="lg:col-span-6">
          <div
            class="bg-black/50 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-inner glowing-border-blue animate-fadeIn delay-100"
          >
            <!-- Title with animated underline -->
            <div class="mb-3">
              <h2 class="text-3xl md:text-4xl font-extrabold text-white inline-block">
                About <span class="text-blue-400">Me</span>
              </h2>
              <div class="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-1.5 animate-pulse"></div>
            </div>

            <!-- Introduction - More concise -->
            <p class="text-base md:text-lg text-gray-300 leading-relaxed">
              🚀 I'm a passionate <span class="text-blue-400 font-semibold relative group cursor-pointer">
                Frontend Developer
                <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span> specializing in <span class="text-blue-400 font-semibold">Vue.js</span> and <span class="text-blue-400 font-semibold">Nuxt.js</span>. 
              I build interactive, performant applications with exceptional user experiences.
            </p>

            <!-- Specialties - Compact layout -->
            <div class="my-3">
              <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Expertise
              </h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="specialty in specialties" 
                  :key="specialty"
                  class="px-3 py-1.5 bg-blue-500/15 text-blue-300 rounded-lg text-xs hover:bg-blue-500/25 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {{ specialty }}
                </span>
              </div>
            </div>

            <!-- Development Philosophy - More compact -->
            <div class="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 my-3 border border-blue-400/20">
              <h4 class="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Philosophy
              </h4>
              <p class="text-gray-300 text-sm">
                Clean, maintainable code • Component-driven architecture • Performance-first approach • Responsive design
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Stats & Quick Facts (3 columns wide) -->
        <div class="lg:col-span-3 flex flex-col gap-6 animate-fadeIn delay-200">
          <!-- Quick Facts -->
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Quick Facts
            </h3>
            <ul class="space-y-2.5">
              <li v-for="fact in quickFacts" :key="fact.text" class="flex items-center gap-2.5 text-gray-300 group">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                <span class="text-sm">{{ fact.text }}</span>
              </li>
            </ul>
          </div>

          <!-- Interactive Stats - Compact -->
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div class="text-2xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform">
                {{ stat.value }}
              </div>
              <div class="text-xs text-gray-400">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Current Focus - Compact -->
          <div class="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h4 class="text-sm font-semibold text-white">Focus</h4>
            </div>
            <p class="text-xs text-gray-300">
              Performance optimization • Serverless • Open-source
            </p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup>
import { ref } from 'vue'

// Quick facts data
const quickFacts = ref([
  { text: 'Vue.js & Nuxt.js Specialist' },
  { text: 'UI/UX Focused' },
  { text: 'Performance Driven' },
  { text: 'Continuous Learner' },
  { text: 'Open to Projects' },
])

// Specialties - More concise
const specialties = ref([
  'Vue 3',
  'Nuxt 3',
  'TypeScript',
  'Tailwind CSS',
  'Component Architecture',
  'API Integration',
  'Performance',
  'Responsive'
])

// Stats
const stats = ref([
  { value: '3+', label: 'Years' },
  { value: '20+', label: 'Corporate Projects' },
  { value: '100%', label: 'Satisfaction' },
  { value: '∞', label: 'Learning' },
])
</script>

<style>
/* Floating animations */
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.05; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.1; }
}

/* Fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { 
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}
.animate-fadeIn.delay-100 { animation-delay: 0.1s; }
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }

/* Blue glowing border */
.glowing-border-blue {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.4);
  box-shadow:
    0 0 15px rgba(59, 130, 246, 0.2),
    0 0 30px rgba(59, 130, 246, 0.1),
    inset 0 0 15px rgba(59, 130, 246, 0.05);
  transition: all 0.3s ease-in-out;
}

.glowing-border-blue:hover {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow:
    0 0 20px rgba(59, 130, 246, 0.3),
    0 0 40px rgba(59, 130, 246, 0.2),
    inset 0 0 20px rgba(59, 130, 246, 0.1);
  transform: translateY(-2px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glass morphism */
.backdrop-blur-lg {
  backdrop-filter: blur(12px);
}

/* Aspect ratio for profile image */
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>