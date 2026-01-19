<template>
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
        @click="isOpen = !isOpen"
        class="md:hidden focus:outline-none"
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

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-slate-900/90 backdrop-blur-lg
               border-t border-white/10"
      >
        <ul class="flex flex-col px-6 py-4 gap-4 text-sm">
          <li><a @click="closeMenu" href="#home" class="hover:text-primary">Home</a></li>
          <li><a @click="closeMenu" href="#about" class="hover:text-primary">About</a></li>
          <li><a @click="closeMenu" href="#skills" class="hover:text-primary">Skills</a></li>
          <li><a @click="closeMenu" href="#projects" class="hover:text-primary">Projects</a></li>
          <li><a @click="closeMenu" href="#contact" class="hover:text-primary">Contact</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
