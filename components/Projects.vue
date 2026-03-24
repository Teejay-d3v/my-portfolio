<template>
  <section  id="projects" class="portfolio-section">
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
    <div class="section-anchor relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 animate-fadeInUp">
        <div class="section-badge mx-auto">
          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span>My Work</span>
        </div>
        <h2 class="section-title">
          Featured <span>Projects</span>
        </h2>
        <p class="section-subtitle mt-4">
          A selection of my best work, showcasing my skills and creativity
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-10 animate-fadeInUp delay-100">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          class="px-4 py-2 rounded-full transition-all duration-300 text-sm"
          :class="activeFilter === filter 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
            : 'glass-light text-gray-300 hover:text-white hover:bg-white/20'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.title"
          class="group portfolio-card p-6 animate-fadeInUp cursor-pointer hover-lift"
          :class="`delay-${(index % 5) * 100}`"
          @click="openModal(project)"
        >
          <!-- Image -->
          <div class="relative h-48 rounded-xl overflow-hidden mb-4">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg border border-white/30 text-sm">
                View Details
              </span>
            </div>

            <!-- Type Badge -->
            <span class="absolute top-3 right-3 px-2 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs rounded-full">
              {{ project.type }}
            </span>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ project.description }}</p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tech in project.tech.slice(0, 3)" 
              :key="tech"
              class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
            >
              {{ tech }}
            </span>
            <span v-if="project.tech.length > 3" class="px-2 py-1 text-xs text-gray-400">
              +{{ project.tech.length - 3 }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex justify-between items-center">
            <a 
              :href="project.demo" 
              target="_blank" 
              @click.stop
              class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm"
            >
              Live Demo
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
            <span class="text-xs text-gray-500">{{ project.year }}</span>
          </div>
        </div>
      </div>


    </div>

<!-- Project Modal -->
<Teleport to="body">
  <Transition name="modal">
    <div 
      v-if="selectedProject"
      class="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
      @click.self="closeModal"
      style="background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);"
    >
      <!-- Modal Content - Fixed position relative to viewport -->
      <div 
        class="relative bg-slate-900/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        @click.stop
      >
        <!-- Sticky Header with Close Button -->
        <div class="sticky top-0 z-20 flex justify-between items-center p-4 md:p-6 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
          <h3 class="text-xl md:text-2xl font-bold text-white truncate pr-8">
            {{ selectedProject.title }}
          </h3>
          <button 
            @click="closeModal"
            class="text-gray-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full p-2 transition-colors absolute right-4 top-4"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <!-- Scrollable Content Area -->
        <div class="overflow-y-auto custom-scrollbar p-4 md:p-6 pt-2">
          <!-- Project Image -->
          <div class="relative h-48 md:h-64 w-full rounded-xl overflow-hidden mb-6">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title" 
              class="w-full h-full object-cover"
              @error="handleModalImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <span class="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                {{ selectedProject.type }}
              </span>
            </div>
          </div>
          
          <!-- Project Description -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-white mb-2">Overview</h4>
            <p class="text-gray-300 leading-relaxed">{{ selectedProject.fullDescription || selectedProject.description }}</p>
          </div>
          
          <!-- Key Features -->
          <div v-if="selectedProject.features" class="mb-6">
            <h4 class="text-lg font-semibold text-white mb-3">Key Features</h4>
            <ul class="space-y-2">
              <li 
                v-for="(feature, index) in selectedProject.features" 
                :key="index"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Technologies -->
          <div class="mb-8">
            <h4 class="text-lg font-semibold text-white mb-3">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in selectedProject.tech" 
                :key="tech"
                class="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sticky bottom-0 bg-slate-900/95 backdrop-blur-xl pt-4 -mx-2 px-2 pb-1 border-t border-white/10 mt-4">
            <a 
              :href="selectedProject.demo"
              target="_blank"
              class="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
            <a 
              v-if="selectedProject.github"
              :href="selectedProject.github"
              target="_blank"
              class="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm md:text-base border border-slate-700"
            >
              <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
            <button 
              @click="closeModal"
              class="flex-1 px-4 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-[1.02] border border-slate-700 text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const filters = ['All', 'Nuxt 3', 'Vue 3', 'API', 'Dashboard', 'Productivity']
const activeFilter = ref('All')
const selectedProject = ref(null)

const projects = ref([
  {
    title: 'Ghibli App',
    description: 'Nuxt 3 app fetching Studio Ghibli movies from an API. Features pagination, search, and responsive design.',
    fullDescription: 'A beautifully designed movie discovery platform built with Nuxt 3, featuring Studio Ghibli films. This application demonstrates modern frontend practices with server-side rendering, API integration, and responsive design. Includes advanced filtering options, infinite scroll, and detailed movie information pages.',
    image: '/projects/ghibli-app.png',
    demo: 'https://exam-ghibli-app.vercel.app/',
    github: 'https://github.com/Teejay-d3v/ghibli-app',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
    type: 'Web App',
    year: '2024',
    features: [
      'Movie discovery with Studio Ghibli API',
      'Advanced search and filtering',
      'Responsive design for all devices',
      'Pagination and infinite scroll',
      'Detailed movie information pages'
    ]
  },
  {
    title: 'Nuxt Tables',
    description: 'Interactive tables with sorting, filtering, and real-time data updates.',
    fullDescription: 'A comprehensive table management system built with Nuxt 3, showcasing advanced table features including sorting, filtering, pagination, and real-time data updates. Perfect for dashboard applications requiring complex data visualization.',
    image: '/projects/nuxt-tables.png',
    demo: 'https://nuxt-tables.vercel.app/',
    github: 'https://github.com/Teejay-d3v/nuxt-tables',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Data Tables'],
    type: 'UI Library',
    year: '2024',
    features: [
      'Sortable and filterable columns',
      'Server-side pagination',
      'Real-time data updates',
      'Export to CSV/Excel',
      'Mobile-responsive design'
    ]
  },
  {
    title: 'Budget Planner',
    description: 'Personal finance tracker with income/expense management and visual reports.',
    fullDescription: 'Comprehensive personal finance management application that helps users track income, expenses, and savings goals. Features intuitive visualizations, budget planning tools, and financial insights to help users achieve their financial objectives.',
    image: '/projects/budgetplanner.png',
    demo: 'https://budget-planner-azure.vercel.app/personal-budget-planner/',
    github: 'https://github.com/Teejay-d3v/budget-planner',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Chart.js', 'Supabase'],
    type: 'Finance App',
    year: '2023',
    features: [
      'Income and expense tracking',
      'Category-based budgeting',
      'Financial goal setting',
      'Interactive charts and graphs',
      'Data export functionality'
    ]
  },
  {
    title: 'Todo Board',
    description: 'Kanban-style task management with drag-and-drop functionality.',
    fullDescription: 'Modern task management application inspired by Kanban methodology. Features drag-and-drop functionality, task prioritization, due dates, and collaborative features. Perfect for personal productivity or team project management.',
    image: '/projects/todoboard.png',
    demo: 'https://nuxt-todo-board.vercel.app/',
    github: 'https://github.com/Teejay-d3v/nuxt-todo-board',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Drag & Drop', 'Local Storage'],
    type: 'Productivity',
    year: '2023',
    features: [
      'Drag-and-drop task management',
      'Multiple board views',
      'Task priority and due dates',
      'Progress tracking',
      'Mobile-optimized interface'
    ]
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard with analytics, product management, and order tracking.',
    fullDescription: 'Comprehensive e-commerce management platform designed for store administrators. Provides real-time insights into sales performance, inventory management, customer analytics, and order processing in a single dashboard.',
    image: '/projects/comingsoon.png',
    demo: '#',
    github: 'https://github.com/Teejay-d3v',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Chart.js', 'Supabase'],
    type: 'Dashboard',
    year: '2024',
    features: [
      'Real-time sales analytics',
      'Product inventory management',
      'Customer behavior insights',
      'Order processing workflow',
      'Advanced reporting tools'
    ]
  },
  {
    title: 'Vixel',
    description: 'Modern e-commerce storefront with campaign-driven design and event-based product showcase.',
    fullDescription: 'Vixel is a cutting-edge e-commerce platform that transforms traditional product catalogs into dynamic, campaign-focused storefronts. Featuring live event management, promotional banners, creator bundles, and conversion-optimized product showcases, Vixel brings advertising energy to online shopping while maintaining clear user experience and easy navigation.',
    image: '/projects/vixel.png',
    demo: 'https://vixel-iota.vercel.app/',
    tech: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'E-commerce', 'Responsive Design'],
    type: 'E-commerce',
    year: '2026',
    features: [
      'Event-driven product campaigns',
      'Dynamic promotional banners',
      'Creator bundle management',
      'Live sale event tracking',
      'Campaign-focused storefront design',
      'Responsive mobile shopping experience'
    ]
  },

])


const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects.value
  return projects.value.filter(p => 
    p.tech.includes(activeFilter.value) || p.type.includes(activeFilter.value)
  )
})

// Add and remove event listener
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

const openModal = (project) => {
  selectedProject.value = project
  document.body.classList.add('modal-open')
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.classList.remove('modal-open')
  document.body.style.overflow = 'auto'
}

// Handle image loading errors
const handleImageError = (e) => {
  e.target.src = '/projects/comingsoon.png'
}

const handleModalImageError = (e) => {
  e.target.src = '/projects/comingsoon.png'
}

// Handle Escape key
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && selectedProject.value) {
    closeModal()
  }
}

// Clean up
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.classList.remove('modal-open')
  document.body.style.overflow = 'auto'
})





</script>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Custom scrollbar for modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #0891b2);
}

/* Ensure modal is above everything */
.fixed {
  z-index: 9999;
}


/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Custom scrollbar for modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #0891b2);
}

/* Ensure modal is above everything */
.fixed {
  z-index: 9999;
}

/* Prevent body scroll when modal is open */
body.modal-open {
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .modal-content {
    max-height: 95vh;
  }
  
  .sticky-header {
    padding: 0.75rem 1rem;
  }
}
</style>
