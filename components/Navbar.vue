<template>
  <nav class="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/30">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a 
          href="#hero" 
          class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          @click.prevent="scrollToSection('hero')"
        >
          YourName
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="`#${link.id}`"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <!-- Optional: Theme toggle -->
          <button 
            class="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            @click="toggleTheme"
            aria-label="Toggle theme"
          >
            <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button 
          class="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden mt-4 pb-4 space-y-4"
      >
        <a 
          v-for="link in navLinks" 
          :key="link.id"
          :href="`#${link.id}`"
          class="block py-2 text-slate-300 hover:text-cyan-400 transition-colors"
          @click.prevent="scrollToSection(link.id); isMobileMenuOpen = false"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // Navbar height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const toggleTheme = () => {
  // Implement theme toggle logic
  console.log('Toggle theme')
}
</script>