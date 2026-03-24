<template>
  <!-- Animated background - Fixed z-index issue -->
  <div class="fixed inset-0 -z-10"> <!-- Changed from z-0 to -z-10 to ensure content is above -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-slate-900"></div>
  </div>

  <!-- Main content - Fixed positioning and overflow -->
  <div class="relative z-0 min-h-screen overflow-x-hidden"> <!-- Added overflow-x-hidden to prevent horizontal scroll -->
    <div 
      class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left transition-transform duration-150" 
      :style="{ transform: `scaleX(${scrollProgress})` }"
    ></div>

    <!-- Main content wrapper with proper padding -->
    <main class="pt-16"> <!-- Added padding-top to account for fixed navbar -->
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>

    <!-- Back to top button - Improved positioning and visibility -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 p-3 bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-700 hover:bg-slate-700/90 transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-cyan-500/20"
        aria-label="Back to top"
        title="Back to top"
      >
        <svg class="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </Transition>

    <!-- Scroll hint - Improved visibility and animation -->
    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showScrollHint" class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div class="flex flex-col items-center text-sm text-slate-400 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800">
          <span class="mb-1">Scroll to explore</span>
          <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </Transition>

    <!-- Loading state (optional) -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const showBackToTop = ref(false)
const showScrollHint = ref(true)
const isLoading = ref(true)
const activeSection = ref('hero')

// Update scroll progress
const updateScrollProgress = () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = height > 0 ? winScroll / height : 0
  showBackToTop.value = winScroll > 300
  
  // Hide scroll hint after user starts scrolling
  if (winScroll > 50 && showScrollHint.value) {
    showScrollHint.value = false
  }

  // Update active section based on scroll position
  updateActiveSection()
}

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  })
}

// Update active section based on scroll position
const updateActiveSection = () => {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100 // Offset for navbar

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

// Handle scroll performance with throttling
let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollProgress()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // Simulate loading complete
  setTimeout(() => {
    isLoading.value = false
  }, 500)

  window.addEventListener('scroll', handleScroll, { passive: true })
  updateScrollProgress()
  
  // Hide scroll hint after 3 seconds if no scroll
  const hintTimer = setTimeout(() => {
    if (window.scrollY < 50) {
      showScrollHint.value = false
    }
  }, 3000)

  // Cleanup timer
  onUnmounted(() => {
    clearTimeout(hintTimer)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Watch for route changes to reset scroll position (if using router)
// If you're using Nuxt, you might want to use:
// const route = useRoute()
// watch(() => route.path, () => {
//   scrollToTop()
// })
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Improve scroll behavior */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* Prevent layout shift on mobile */
@media (max-width: 640px) {
  .back-to-top {
    bottom: 16px;
    right: 16px;
  }
}
</style>
