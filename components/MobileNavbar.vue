<template>
  <nav class="fixed inset-x-0 top-0 z-[60] border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
    <div class="flex h-16 items-center justify-between px-4">
      <button
        @click="scrollToSection('hero')"
        class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-cyan-200"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
        TJLozada
      </button>

      <a
        href="/Timothy-John-Lozada-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
      >
        Resume
      </a>
    </div>

    <div class="px-2 pb-2">
      <div class="grid grid-cols-5 gap-1 rounded-2xl border border-slate-800 bg-slate-900/80 p-1">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-medium transition"
          :class="activeSection === link.id
            ? 'bg-cyan-500/20 text-cyan-200'
            : 'text-slate-400 active:bg-slate-800'"
        >
          <span class="text-base leading-none">{{ link.icon }}</span>
          <span class="truncate">{{ link.label }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const NAVBAR_OFFSET = 100

const navLinks = [
  { id: 'hero', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◉' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'projects', label: 'Work', icon: '▣' },
  { id: 'contact', label: 'Contact', icon: '✉' },
]

const activeSection = ref('hero')
let isTicking = false

const sectionTop = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return Number.POSITIVE_INFINITY
  return el.getBoundingClientRect().top + window.scrollY
}

const updateActiveSection = () => {
  const y = window.scrollY
  let current = navLinks[0].id

  for (let i = 0; i < navLinks.length; i++) {
    const item = navLinks[i]
    const next = navLinks[i + 1]
    const start = sectionTop(item.id) - NAVBAR_OFFSET
    const end = next ? sectionTop(next.id) - NAVBAR_OFFSET : Number.POSITIVE_INFINITY

    if (y >= start && y < end) {
      current = item.id
      break
    }
  }

  if (window.innerHeight + y >= document.documentElement.scrollHeight - 2) {
    current = navLinks[navLinks.length - 1].id
  }

  activeSection.value = current
}

const onScroll = () => {
  if (isTicking) return

  isTicking = true
  window.requestAnimationFrame(() => {
    updateActiveSection()
    isTicking = false
  })
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  activeSection.value = id
  const top = Math.max(el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET, 0)
  window.history.replaceState(null, '', `#${id}`)
  window.scrollTo({ top, behavior: 'smooth' })
}

onMounted(() => {
  const hash = window.location.hash.replace('#', '')
  if (hash && navLinks.some((item) => item.id === hash)) {
    activeSection.value = hash
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateActiveSection)
})
</script>