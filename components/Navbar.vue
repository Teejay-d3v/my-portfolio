<template>
  <!-- NAVBAR -->
  <header
    class="fixed top-0 left-0 w-full z-50
           bg-slate-900/70 backdrop-blur-lg
           border-b border-white/10"
  >
    <nav class="px-6 md:px-20 py-4 flex items-center justify-between text-white">

      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-xl font-bold tracking-wide hover:text-primary transition"
      >
        TJ
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="hidden md:flex gap-8 text-sm font-medium">
        <li><a href="#home" class="hover:text-primary transition">Home</a></li>
        <li><a href="#about" class="hover:text-primary transition">About</a></li>
        <li><a href="#skills" class="hover:text-primary transition">Skills</a></li>
        <li><a href="#projects" class="hover:text-primary transition">Projects</a></li>
        <li><a href="#contact" class="hover:text-primary transition">Contact</a></li>
      </ul>

      <!-- Mobile Button -->
      <button
        @click="isOpen = true"
        class="md:hidden focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  </header>

  <!-- MOBILE MENU OVERLAY (OUTSIDE HEADER) -->
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[60] bg-black/50"
      @click="closeMenu"
    />
  </transition>

  <!-- MOBILE MENU PANEL -->
  <transition name="slide-right">
    <aside
      v-if="isOpen"
      class="fixed inset-0 z-[70]
             h-[100dvh] w-full max-w-sm ml-auto
             bg-slate-900 text-white
             flex flex-col px-6 py-8"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-10">
        <span class="text-lg font-semibold tracking-wide">Menu</span>
        <button @click="closeMenu" aria-label="Close menu">
          ✕
        </button>
      </div>

      <!-- Links -->
      <ul class="flex flex-col gap-6 text-lg font-medium">
        <li><a @click="closeMenu" href="#home" class="menu-link">Home</a></li>
        <li><a @click="closeMenu" href="#about" class="menu-link">About</a></li>
        <li><a @click="closeMenu" href="#skills" class="menu-link">Skills</a></li>
        <li><a @click="closeMenu" href="#projects" class="menu-link">Projects</a></li>
        <li><a @click="closeMenu" href="#contact" class="menu-link">Contact</a></li>
      </ul>

      <!-- Footer -->
      <div class="mt-auto pt-10 text-sm text-white/60">
        © 2026 · TJ Portfolio
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

/* Lock background scroll */
watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<style scoped>
/* Fade backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide panel */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Menu links */
.menu-link {
  display: block;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s ease;
}

.menu-link:hover {
  color: var(--color-primary, #38bdf8);
}
</style>
