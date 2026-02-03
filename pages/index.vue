<template>
  <!-- Animated background -->
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-slate-900"></div>
  </div>

  <!-- Main content -->
  <div class="relative z-10">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Progress indicator -->
    <div 
      class="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50"
      :style="{ transform: `scaleX(${scrollProgress})` }"
    ></div>

    <!-- Sections -->
    <section id="hero">
      <Hero />
    </section>
    
    <section id="about">
      <About />
    </section>
    
    <section id="skills">
      <Skills />
    </section>
    
    <section id="projects">
      <Projects />
    </section>
    
    <section id="contact">
      <Contact />
    </section>

    <!-- Back to top -->
    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 p-3 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700 hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 group"
      aria-label="Back to top"
    >
      <svg class="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>

    <!-- Scroll hint -->
    <div v-if="showScrollHint" class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
      <div class="flex flex-col items-center text-sm text-slate-400">
        <span>Scroll</span>
        <svg class="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const showBackToTop = ref(false)
const showScrollHint = ref(true)

const updateScrollProgress = () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = height > 0 ? winScroll / height : 0
  showBackToTop.value = winScroll > 300
  
  // Hide scroll hint after user starts scrolling
  if (winScroll > 100) {
    showScrollHint.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Intersection Observer for active nav items
const sections = ref([])

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
  
  // Hide scroll hint after 5 seconds
  setTimeout(() => {
    showScrollHint.value = false
  }, 5000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Section spacing and animations */
section {
  scroll-margin-top: 80px; /* Adjust based on your navbar height */
}

/* Custom scroll behavior */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>