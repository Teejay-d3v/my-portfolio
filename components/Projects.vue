<template>
  <section
    id="projects"
    class="relative min-h-screen flex items-center p-6 md:px-20 overflow-hidden"
  >

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>
    <!-- Animated floating elements -->
    <div class="absolute inset-0">
      <div v-for="i in 12" :key="i" 
           class="absolute w-48 h-48 border border-blue-400/10 rounded-full"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animation: `float ${15 + i * 2}s linear infinite`,
             animationDelay: `${i * 0.5}s`
           }"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto my-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
          Featured  <span class="text-blue-400">Projects</span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-200">
          A collection of my recent work showcasing modern web development with Vue.js, Nuxt 3, and cutting-edge technologies.
        </p>
        
        <!-- Filter buttons -->
        <!-- <div class="flex flex-wrap justify-center gap-3 mt-6 animate-fadeIn delay-400">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-4 py-2 rounded-full transition-all duration-300"
            :class="activeFilter === filter 
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'"
          >
            {{ filter }}
          </button>
        </div> -->
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Ghibli App -->
        <div
          class="group cursor-pointer"
          @click="openModal(projects[0])"
        >
          <div
            class="bg-white/5 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl p-6
                   hover:scale-105 hover:-translate-y-2 
                   hover:shadow-xl hover:shadow-blue-400/50
                   transition-all duration-500
                   transform-gpu
                   animate-fadeIn"
            style="animation-delay: 0ms"
          >
            <!-- Image with overlay -->
            <div class="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <img
                src="/projects/ghibli-app.png"
                alt="Ghibli App screenshot"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span class="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  View Details
                </span>
              </div>
            </div>
            
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              Ghibli App
            </h3>
            <p class="mb-4 text-gray-300 text-sm line-clamp-3">
              Nuxt 3 app fetching Studio Ghibli movies from an API.
              Features pagination, search, and responsive design.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in projects[0].tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
              >
                {{ tech }}
              </span>
              <span class="px-2 py-1 text-xs text-gray-400">
                +{{ projects[0].tech.length - 3 }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://exam-ghibli-app.vercel.app/"
                target="_blank"
                @click.stop
                class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Live Demo 
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <span class="text-xs text-gray-400">{{ projects[0].type }}</span>
            </div>
          </div>
        </div>

        <!-- Nuxt Tables -->
        <div
          class="group cursor-pointer"
          @click="openModal(projects[1])"
        >
          <div
            class="bg-white/5 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl p-6
                   hover:scale-105 hover:-translate-y-2 
                   hover:shadow-xl hover:shadow-blue-400/50
                   transition-all duration-500
                   transform-gpu
                   animate-fadeIn"
            style="animation-delay: 100ms"
          >
            <div class="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <img
                src="/projects/nuxt-tables.png"
                alt="Nuxt Tables screenshot"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span class="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  View Details
                </span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              Nuxt Tables
            </h3>
            <p class="mb-4 text-gray-300 text-sm sm:text-base line-clamp-3">
              Interactive tables demonstrating modern Nuxt 3 & Tailwind CSS
              patterns with API-driven data handling.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in projects[1].tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
              >
                {{ tech }}
              </span>
              <span class="px-2 py-1 text-xs text-gray-400">
                +{{ projects[1].tech.length - 3 }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://nuxt-tables.vercel.app/"
                target="_blank"
                @click.stop
                class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Live Demo 
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <span class="text-xs text-gray-400">{{ projects[1].type }}</span>
            </div>
          </div>
        </div>

        <!-- Budget Planner -->
        <div
          class="group cursor-pointer"
          @click="openModal(projects[2])"
        >
          <div
            class="bg-white/5 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl p-6
                   hover:scale-105 hover:-translate-y-2 
                   hover:shadow-xl hover:shadow-blue-400/50
                   transition-all duration-500
                   transform-gpu
                   animate-fadeIn"
            style="animation-delay: 200ms"
          >
            <div class="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <img
                src="/projects/budgetplanner.png"
                alt="Nuxt Budget Planner screenshot"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span class="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  View Details
                </span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              Budget Planner
            </h3>
            <p class="mb-4 text-gray-300 text-sm sm:text-base line-clamp-3">
              A personal finance tracker built with Nuxt 3 and Tailwind CSS.
              Features income & expense tracking, category filtering, and
              a clean dashboard-style UI.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in projects[2].tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
              >
                {{ tech }}
              </span>
              <span class="px-2 py-1 text-xs text-gray-400">
                +{{ projects[2].tech.length - 3 }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://budget-planner-azure.vercel.app/personal-budget-planner/"
                target="_blank"
                @click.stop
                class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Live Demo 
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <span class="text-xs text-gray-400">{{ projects[2].type }}</span>
            </div>
          </div>
        </div>

        <!-- Todo Board -->
        <div
          class="group cursor-pointer"
          @click="openModal(projects[3])"
        >
          <div
            class="bg-white/5 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl p-6
                   hover:scale-105 hover:-translate-y-2 
                   hover:shadow-xl hover:shadow-blue-400/50
                   transition-all duration-500
                   transform-gpu
                   animate-fadeIn"
            style="animation-delay: 300ms"
          >
            <div class="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <img
                src="/projects/todoboard.png"
                alt="Todo Board screenshot"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span class="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  View Details
                </span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              Todo Board
            </h3>
            <p class="mb-4 text-gray-300 text-sm sm:text-base line-clamp-3">
              A fully interactive Kanban-style Todo board built with Nuxt 3, Vue 3, Tailwind CSS, and draggable cards.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in projects[3].tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
              >
                {{ tech }}
              </span>
              <span class="px-2 py-1 text-xs text-gray-400">
                +{{ projects[3].tech.length - 3 }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="https://nuxt-todo-board.vercel.app/"
                target="_blank"
                @click.stop
                class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Live Demo 
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <span class="text-xs text-gray-400">{{ projects[3].type }}</span>
            </div>
          </div>
        </div>

        <!-- E-commerce Dashboard (Example placeholder) -->
        <div
          class="group cursor-pointer"
          @click="openModal(projects[4])"
        >
          <div
            class="bg-white/5 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl p-6
                   hover:scale-105 hover:-translate-y-2 
                   hover:shadow-xl hover:shadow-blue-400/50
                   transition-all duration-500
                   transform-gpu
                   animate-fadeIn"
            style="animation-delay: 400ms"
          >
            <div class="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <div class="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span class="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  Coming Soon
                </span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              E-commerce Dashboard
            </h3>
            <p class="mb-4 text-gray-300 text-sm sm:text-base line-clamp-3">
              Full-featured e-commerce dashboard with real-time analytics, product management, and order processing.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in projects[4].tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
              >
                {{ tech }}
              </span>
              <span class="px-2 py-1 text-xs text-gray-400">
                +{{ projects[4].tech.length - 3 }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-blue-400 flex items-center gap-1 cursor-not-allowed">
                In Development
              </span>
              <span class="text-xs text-gray-400">{{ projects[4].type }}</span>
            </div>
          </div>
        </div>

        <!-- Real-time Chat App (Example placeholder) -->
        <div
          class="group cursor-pointer"
          @click="openModal(projects[5])"
        >
          <div
            class="bg-white/5 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl p-6
                   hover:scale-105 hover:-translate-y-2 
                   hover:shadow-xl hover:shadow-blue-400/50
                   transition-all duration-500
                   transform-gpu
                   animate-fadeIn"
            style="animation-delay: 500ms"
          >
            <div class="relative h-48 w-full overflow-hidden rounded-xl mb-4">
              <div class="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span class="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  Coming Soon
                </span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
              Real-time Chat App
            </h3>
            <p class="mb-4 text-gray-300 text-sm sm:text-base line-clamp-3">
              Modern chat application with real-time messaging, user authentication, and file sharing capabilities.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in projects[5].tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded"
              >
                {{ tech }}
              </span>
              <span class="px-2 py-1 text-xs text-gray-400">
                +{{ projects[5].tech.length - 3 }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <a
                href="#"
                @click.stop
                class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                View Demo 
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <span class="text-xs text-gray-400">{{ projects[5].type }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View more button -->
      <div class="text-center mt-12 animate-fadeIn delay-600">
        <a
          href="https://github.com/Teejay-d3v"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View More on GitHub
        </a>
      </div>
    </div>

    <!-- Project Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click.self="closeModal"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"></div>
      
      <!-- Modal Content -->
      <div 
        class="relative z-10 bg-slate-900/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        :class="modalAnimation"
      >
        <div class="p-6 md:p-8">
          <!-- Close button -->
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-white bg-slate-800/50 rounded-full p-2 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <!-- Project Image -->
          <div class="relative h-64 md:h-80 w-full rounded-xl overflow-hidden mb-6">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div class="absolute bottom-4 left-6">
              <span class="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                {{ selectedProject.type }}
              </span>
            </div>
          </div>
          
          <!-- Project Title -->
          <h3 class="text-3xl font-bold text-white mb-4">{{ selectedProject.title }}</h3>
          
          <!-- Project Description -->
          <p class="text-gray-300 mb-6 leading-relaxed">{{ selectedProject.fullDescription }}</p>
          
          <!-- Key Features -->
          <div v-if="selectedProject.features" class="mb-6">
            <h4 class="text-xl font-semibold text-white mb-3">Key Features</h4>
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
            <h4 class="text-xl font-semibold text-white mb-3">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in selectedProject.tech" 
                :key="tech"
                class="px-4 py-2 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              :href="selectedProject.demo"
              target="_blank"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
            <a 
              v-if="selectedProject.github"
              :href="selectedProject.github"
              target="_blank"
              class="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-slate-700"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
            <button 
              @click="closeModal"
              class="flex-1 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 border border-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>


    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = [
  {
    title: 'Ghibli App',
    description: 'Nuxt 3 app fetching Studio Ghibli movies from an API. Features pagination, search, and responsive design.',
    fullDescription: 'A beautifully designed movie discovery platform built with Nuxt 3, featuring Studio Ghibli films. This application demonstrates modern frontend practices with server-side rendering, API integration, and responsive design. Includes advanced filtering options, infinite scroll, and detailed movie information pages.',
    image: '/projects/ghibli-app.png',
    demo: 'https://exam-ghibli-app.vercel.app/',
    github: 'https://github.com/Teejay-d3v/ghibli-app',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'API Integration', 'Responsive Design', 'Server-side Rendering'],
    type: 'Web Application',
    features: [
      'Movie discovery with Studio Ghibli API',
      'Advanced search and filtering',
      'Responsive design for all devices',
      'Pagination and infinite scroll',
      'Detailed movie information pages',
      'Server-side rendering for SEO'
    ]
  },
  {
    title: 'Nuxt Tables',
    description: 'Interactive tables demonstrating modern Nuxt 3 & Tailwind CSS patterns with API-driven data handling.',
    fullDescription: 'A comprehensive table management system built with Nuxt 3, showcasing advanced table features including sorting, filtering, pagination, and real-time data updates. Perfect for dashboard applications requiring complex data visualization.',
    image: '/projects/nuxt-tables.png',
    demo: 'https://nuxt-tables.vercel.app/',
    github: 'https://github.com/Teejay-d3v/nuxt-tables',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Data Tables', 'API Integration', 'TypeScript'],
    type: 'UI Component Library',
    features: [
      'Sortable and filterable columns',
      'Server-side pagination',
      'Real-time data updates',
      'Export to CSV/Excel',
      'Customizable themes',
      'Mobile-responsive design'
    ]
  },
  {
    title: 'Budget Planner',
    description: 'A personal finance tracker built with Nuxt 3 and Tailwind CSS. Features income & expense tracking, category filtering, and a clean dashboard-style UI.',
    fullDescription: 'Comprehensive personal finance management application that helps users track income, expenses, and savings goals. Features intuitive visualizations, budget planning tools, and financial insights to help users achieve their financial objectives.',
    image: '/projects/budgetplanner.png',
    demo: 'https://budget-planner-azure.vercel.app/personal-budget-planner/',
    github: 'https://github.com/Teejay-d3v/budget-planner',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Chart.js', 'SupaBase', 'Responsive Design'],
    type: 'Finance Application',
    features: [
      'Income and expense tracking',
      'Category-based budgeting',
      'Financial goal setting',
      'Interactive charts and graphs',
      'Data export functionality',
      'Dark/light mode support'
    ]
  },
  {
    title: 'Todo Board',
    description: 'A fully interactive Kanban-style Todo board built with Nuxt 3, Vue 3, Tailwind CSS, and draggable cards.',
    fullDescription: 'Modern task management application inspired by Kanban methodology. Features drag-and-drop functionality, task prioritization, due dates, and collaborative features. Perfect for personal productivity or team project management.',
    image: '/projects/todoboard.png',
    demo: 'https://nuxt-todo-board.vercel.app/',
    github: 'https://github.com/Teejay-d3v/nuxt-todo-board',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Drag & Drop', 'Local Storage', 'Responsive Design'],
    type: 'Productivity Tool',
    features: [
      'Drag-and-drop task management',
      'Multiple board views (Kanban, List)',
      'Task priority and due dates',
      'Collaborative features',
      'Progress tracking',
      'Mobile-optimized interface'
    ]
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Full-featured e-commerce dashboard with real-time analytics, product management, and order processing.',
    fullDescription: 'Comprehensive e-commerce management platform designed for store administrators. Provides real-time insights into sales performance, inventory management, customer analytics, and order processing in a single dashboard.',
    image: '/projects/ecommerce-dashboard.png',
    demo: '#',
    github: 'https://github.com/Teejay-d3v',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Supabase', 'Chart.js', 'Real-time'],
    type: 'Dashboard Application',
    features: [
      'Real-time sales analytics',
      'Product inventory management',
      'Customer behavior insights',
      'Order processing workflow',
      'Multi-vendor support',
      'Advanced reporting tools'
    ]
  },
  {
    title: 'Real-time Chat App',
    description: 'Modern chat application with real-time messaging, user authentication, and file sharing capabilities.',
    fullDescription: 'Feature-rich chat application supporting real-time messaging, group chats, file sharing, and user authentication. Built with modern web technologies to provide a seamless communication experience.',
    image: '/projects/chat-app.png',
    demo: '#',
    github: 'https://github.com/Teejay-d3v',
    tech: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Socket.io', 'Supabase', 'Real-time'],
    type: 'Communication Platform',
    features: [
      'Real-time messaging',
      'Group chat rooms',
      'File and image sharing',
      'User authentication',
      'Message history',
      'Typing indicators'
    ]
  }
]

const filters = ['All', 'Nuxt 3', 'Vue 3', 'Dashboard', 'Productivity', 'API']
const activeFilter = ref('All')
const selectedProject = ref(null)
const modalAnimation = ref('modal-enter')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(project => 
    project.tech.some(tech => 
      tech.toLowerCase().includes(activeFilter.value.toLowerCase())
    ) || 
    project.type.toLowerCase().includes(activeFilter.value.toLowerCase())
  )
})

const openModal = (project) => {
  selectedProject.value = project
  modalAnimation.value = 'modal-enter'
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalAnimation.value = 'modal-exit'
  setTimeout(() => {
    selectedProject.value = null
    document.body.style.overflow = 'auto'
  }, 300)
}
</script>

<style scoped>
/* Floating / blob animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) translateX(0) rotate(0deg); 
    opacity: 0.1;
  }
  33% { 
    transform: translateY(-20px) translateX(10px) rotate(120deg); 
    opacity: 0.2;
  }
  66% { 
    transform: translateY(10px) translateX(-10px) rotate(240deg); 
    opacity: 0.15;
  }
}

@keyframes fadeIn {
  0% { 
    opacity: 0; 
    transform: translateY(30px) scale(0.95); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
}

@keyframes slideInUp {
  0% { 
    opacity: 0; 
    transform: translateY(50px) scale(0.95); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
}

@keyframes slideOutDown {
  0% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
  100% { 
    opacity: 0; 
    transform: translateY(50px) scale(0.95); 
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.modal-enter {
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.modal-exit {
  animation: slideOutDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Blue glowing border */
.glowing-border-blue {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.45);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.4),
    0 0 12px rgba(59, 130, 246, 0.35),
    inset 0 0 12px rgba(255, 255, 255, 0.06);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

/* Bigger, clearer hover */
.glowing-border-blue:hover {
  transform: translateY(-8px);
  border-color: rgba(59, 130, 246, 0.75);
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.6),
    0 0 25px rgba(59, 130, 246, 0.5),
    0 0 45px rgba(59, 130, 246, 0.35),
    inset 0 0 18px rgba(255, 255, 255, 0.1);
}

/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar for modal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.8);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* GPU acceleration for animations */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Modal backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}
</style>