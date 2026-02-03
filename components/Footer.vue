<template>
  <footer class="py-8 px-4 border-t border-slate-800/50">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Copyright -->
        <div class="text-center md:text-left">
          <p class="text-slate-400 text-sm">
            © {{ new Date().getFullYear() }} Timothy John Lozada. All rights reserved.
          </p>
          <p class="text-slate-500 text-xs mt-1">
            Built with <span class="text-blue-400">Vue.js</span> & 
            <span class="text-green-400">Nuxt 3</span>
          </p>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6">
          <a 
            v-for="link in footerLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate-400 hover:text-white text-sm transition-colors"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Back to top -->
        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
          Back to top
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { name: 'GitHub', href: 'https://github.com/Teejay-d3v' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/timothy-john-lozada-b7461b248/' },
  { name: 'Email', href: 'mailto:timlozada5@gmail.com' }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>