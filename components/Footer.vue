<template>
  <footer class="relative border-t border-slate-800/80 bg-slate-950/70">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
      <div class="space-y-1 text-center md:text-left">
        <p class="text-sm font-semibold text-slate-100">Timothy John Lozada</p>
        <p class="text-sm text-slate-400">Frontend Developer focused on fast, polished web apps.</p>
        <p class="text-xs text-slate-500">(c) {{ currentYear }} All rights reserved.</p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a
          v-for="link in footerLinks"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          {{ link.name }}
        </a>
      </div>

      <button
        @click="scrollToTop"
        class="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white md:mx-0"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        Back to top
      </button>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = [
  { name: 'GitHub', href: 'https://github.com/Teejay-d3v' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/timothy-john-lozada-b7461b248/' },
  { name: 'Email', href: 'mailto:timlozada5@gmail.com' }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
