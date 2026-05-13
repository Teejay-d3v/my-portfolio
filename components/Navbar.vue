<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_10px_30px_rgba(2,6,23,0.45)]' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between gap-4">
        <a
          href="#hero"
          class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-white"
          @click.prevent="scrollToSection('hero')"
        >
          <span class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
          TJLozada
        </a>

        <div class="hidden items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/65 p-1 md:flex">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            :aria-current="activeSection === link.id ? 'page' : undefined"
            class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
            :class="activeSection === link.id ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_8px_24px_rgba(14,165,233,0.35)]' : 'text-slate-300 hover:text-white'"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="hidden items-center gap-3 md:flex">
          <a
            href="/Timothy-John-Lozada-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20 hover:text-white"
          >
            Resume
          </a>
        </div>

        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 transition hover:border-cyan-400/40 hover:text-white md:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="mb-4 rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"
        >
          <div class="space-y-2">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              class="block rounded-xl px-4 py-3 text-sm font-medium transition"
              :class="activeSection === link.id ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'"
              @click.prevent="scrollToSection(link.id)"
            >
              {{ link.name }}
            </a>
          </div>
          <a
            href="/Timothy-John-Lozada-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20 hover:text-white"
          >
            Open Resume
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useNavLinks } from '@/composables/useNavLinks'

// State
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('hero')
const NAVBAR_OFFSET = 96
const ACTIVE_SECTION_OFFSET = 140
let scrollTicking = false

// Navigation links (extracted to composable for reusability)
const navLinks = useNavLinks()

/**
 * Update navigation bar state on scroll/resize
 */
const updateNavState = () => {
  isScrolled.value = window.scrollY > 20
  updateActiveSection()
}

/**
 * Keep the highlighted nav item aligned with the section currently in view.
 */
const updateActiveSection = () => {
  const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET
  const documentHeight = document.documentElement.scrollHeight
  const viewportBottom = window.innerHeight + window.scrollY

  if (viewportBottom >= documentHeight - 2) {
    activeSection.value = navLinks.value[navLinks.value.length - 1]?.id || 'contact'
    return
  }

  let currentSection = navLinks.value[0]?.id || 'hero'

  for (const link of navLinks.value) {
    const section = document.getElementById(link.id)
    if (!section) continue

    const sectionTop = section.getBoundingClientRect().top + window.scrollY
    if (scrollPosition >= sectionTop) {
      currentSection = link.id
    }
  }

  activeSection.value = currentSection
}

/**
 * Throttled scroll handler for performance
 */
const handleScroll = () => {
  if (scrollTicking) return
  scrollTicking = true
  window.requestAnimationFrame(() => {
    updateNavState()
    scrollTicking = false
  })
}

/**
 * Smoothly scroll to a section and update active state
 */
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (!section) return
  activeSection.value = sectionId
  const targetPosition = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  const top = Math.max(targetPosition, 0)
  window.history.replaceState(null, '', `#${sectionId}`)
  window.scrollTo({ top, behavior: 'smooth' })
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateNavState)
  const hash = window.location.hash.replace('#', '')
  if (hash && navLinks.value.some((link) => link.id === hash)) {
    activeSection.value = hash
  }
  updateNavState()
  window.requestAnimationFrame(updateNavState)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateNavState)
})
</script>
