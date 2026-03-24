<template>
  <section id="hero" class="portfolio-section">
    <!-- Overlay -->
    <div class="section-overlay"></div>
    
    <!-- Floating elements -->
    <div class="floating-elements">
      <div
        v-for="i in 12"
        :key="i"
        class="floating-circle"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${15 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.5}s`
        }"
      ></div>
    </div>

    <!-- Grid pattern -->
    <div class="absolute inset-0 grid-pattern opacity-30"></div>

    <!-- Content -->
    <div  class="section-anchor relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)] gap-12">
        <!-- Left Content -->
        <div class="flex-1 space-y-8 text-center lg:text-left">
          <!-- Badge -->
          <div class="section-badge inline-flex mx-auto lg:mx-0">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Available for work</span>
          </div>

          <!-- Heading -->
          <div class="space-y-4 animate-fadeInUp">
            <h1 class="section-title">
              Hi, I'm <span>T-Jay</span>
            </h1>
            <h2 class="text-3xl md:text-4xl text-gray-200 font-semibold">
              Frontend Developer
            </h2>
          </div>

          <!-- Description -->
          <p class="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInUp delay-100">
            I build exceptional digital experiences with 
            <span class="text-blue-400 font-semibold">Vue.js</span> and 
            <span class="text-blue-400 font-semibold">Nuxt.js</span>. 
            Specialized in creating performant, accessible, and beautiful web applications.
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

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0 animate-fadeInUp delay-300">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-blue-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="flex-1 hidden lg:block animate-fadeInUp delay-200">
          <div class="relative">
            <!-- Glowing orb -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            <!-- Code window -->
            <div class="relative glass-dark rounded-2xl overflow-hidden border border-blue-400/30">
              <div class="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                <span class="text-xs text-gray-400 ml-2">portfolio.vue</span>
              </div>
              <div class="p-6 font-mono text-sm">
                <pre class="text-gray-300"><span class="text-blue-400">&lt;template&gt;</span>
  <span class="text-purple-400">&lt;div</span> <span class="text-green-400">class=</span><span class="text-yellow-400">"hero"</span><span class="text-purple-400">&gt;</span>
    <span class="text-blue-400">&lt;h1&gt;</span>Creative Developer<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;p&gt;</span>Building the web of tomorrow<span class="text-blue-400">&lt;/p&gt;</span>
  <span class="text-purple-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span></pre>
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

const stats = ref([
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects' },
  { value: '100%', label: 'Satisfaction' }
])
</script>
