<template>
  <section
    id="home"
    class="min-h-screen relative py-16 md:py-20 flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden"
  >


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

    <!-- Floating Animated Elements -->
    <div class="absolute inset-0">
      <!-- Animated blobs -->
      <div
        class="absolute top-1/4 left-10 lg:left-20 w-80 h-80 lg:w-96 lg:h-96 bg-blue-400/15 rounded-full blur-3xl animate-slow-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 right-10 lg:right-20 w-80 h-80 lg:w-96 lg:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"
      ></div>
      
      <!-- Floating code brackets -->
      <div
        v-for="(bracket, index) in floatingBrackets"
        :key="index"
        class="absolute text-blue-400/20 font-bold hidden lg:block"
        :class="bracket.animationClass"
        :style="{
          left: `${bracket.x}%`,
          top: `${bracket.y}%`,
          animationDelay: `${bracket.delay}s`,
          fontSize: `${bracket.size}px`
        }"
      >
        {{ bracket.char }}
      </div>
    </div>

    <!-- Main Content - Wider Layout -->
    <div class="relative z-10 w-full max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- Left Column: Hero Content (7 columns) -->
        <div class="lg:col-span-7">
          <div
            class="relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col gap-6 shadow-2xl glowing-card"
          >
            <!-- Animated greeting -->
            <div class="mb-2">
              <div class="text-lg md:text-xl text-blue-400 font-mono mb-4 animate-fadeIn">
                👋 Welcome to my portfolio
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4 animate-fadeIn delay-100">
                Hi, I'm <span class="text-blue-400 relative">
                  T-Jay
                  <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></span>
                </span>
              </h1>
            </div>

            <!-- Tagline -->
            <p class="text-lg md:text-xl text-gray-200 leading-relaxed animate-fadeIn delay-200">
              A passionate <span class="text-blue-400 font-semibold relative group cursor-pointer">
                Frontend Developer
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span> specializing in modern web technologies with expertise in 
              <span class="text-blue-400 font-semibold">Vue.js</span> and <span class="text-blue-400 font-semibold">Nuxt.js</span>.
            </p>

            <!-- Specializations -->
            <div class="my-4 animate-fadeIn delay-300">
              <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                What I Build
              </h3>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Interactive Web Apps
                </span>
                <span class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  Responsive UIs
                </span>
                <span class="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                  High-performance Interfaces
                </span>
                <span class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Modern Web Solutions
                </span>
              </div>
            </div>

            <!-- Call to Action Buttons -->
            <div class="flex flex-wrap gap-4 mt-6 animate-fadeIn delay-400">
              <a
                href="#projects"
                class="group relative px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                  View Projects
                </span>
                <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>

              <a
                href="/Timothy-John-Lozada-CV.pdf"
                download
                class="group relative px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Download CV
                </span>
                <span class="absolute inset-0 bg-blue-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>

            <!-- Stats Bar -->
            <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 animate-fadeIn delay-500">
              <div class="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div class="text-2xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div class="text-sm text-gray-400">Years Experience</div>
              </div>
              <div class="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div class="text-2xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                  20+
                </div>
                <div class="text-sm text-gray-400">Projects Built</div>
              </div>
              <div class="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div class="text-2xl font-bold text-green-400 mb-1 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div class="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div class="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div class="text-2xl font-bold text-purple-400 mb-1 group-hover:scale-110 transition-transform">
                  ∞
                </div>
                <div class="text-sm text-gray-400">Passion for Code</div>
              </div>
            </div> -->
          </div>
        </div>


      </div>

      <!-- Scroll Indicator -->
      <div class="mt-12 text-center animate-fadeIn delay-600">
        <a href="#about" class="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <span class="text-sm">Explore More</span>
          <div class="relative">
            <svg
              class="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors animate-bounce"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div class="absolute -inset-2 bg-orange-400/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Floating bracket characters
const floatingBrackets = ref([
  { char: '{', x: 5, y: 10, size: 56, animationClass: 'animate-float-slow', delay: 0 },
  { char: '}', x: 95, y: 20, size: 64, animationClass: 'animate-float-medium', delay: 1 },
  { char: '<', x: 10, y: 80, size: 48, animationClass: 'animate-float-fast', delay: 2 },
  { char: '>', x: 90, y: 70, size: 52, animationClass: 'animate-float-slow', delay: 3 },
])

// Tech stack preview
const techStack = ref([
  {
    name: 'Vue 3',
    svg: `<svg viewBox="0 0 128 128" class="w-full h-full">
          <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"></path><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"></path><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"></path>
          </svg>`
  },
  {
    name: 'Nuxt 3',
    svg: `<svg viewBox="0 0 128 128" class="w-full h-full">
          <path fill="#00dc82" d="M71.679 106.667h47.359c1.514 0 2.962-.533 4.268-1.283 1.307-.75 2.66-1.688 3.415-2.986.755-1.298 1.279-2.769 1.279-4.264s-.524-2.971-1.279-4.268l-32-55.038c-.755-1.297-1.68-2.24-2.99-2.991-1.312-.751-3.18-1.279-4.695-1.279-1.514 0-2.957.533-4.263 1.279-1.307.746-2.232 1.693-2.987 2.991l-8.108 14.08-16.213-27.311c-.755-1.297-1.68-2.66-2.986-3.41-1.307-.75-2.755-.854-4.269-.854-1.514 0-2.957.104-4.264.854-1.306.75-2.66 2.113-3.415 3.41L.854 93.864C.099 95.161 0 96.634 0 98.134c0 1.499.099 2.966.854 4.263.754 1.297 2.103 2.24 3.415 2.986 1.311.747 2.754 1.284 4.264 1.284H38.4c11.835 0 20.449-5.31 26.453-15.364l14.505-25.17 7.678-13.226 23.468 40.104H79.359ZM37.97 93.01H17.066l31.147-53.76L64 66.134 53.543 84.361c-3.986 6.523-8.533 8.65-15.572 8.65zm0 0"></path>
          </svg>`
  },
  {
    name: 'TS',
    svg: `<svg viewBox="0 0 128 128" class="w-full h-full">
          <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
          </svg>`
  },
  {
    name: 'Tailwind',
    svg: `<svg viewBox="0 0 128 128" class="w-full h-full">
          <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
          </svg>`
  },
  {
    name: 'Vite',
    svg: `<svg viewBox="0 0 128 128" class="w-full h-full">
          <path d="M105.625 19.547L67.172 117.836a3.185 3.185 0 01-6.05-.094L22.313 19.574a3.244 3.244 0 014.32-4.054l34.973 15.68a3.845 3.845 0 003.07-.094l37.266-16.387a3.245 3.245 0 014.683 3.828z" fill="url(#a)"></path><path d="M78.016 65.98l-9.969-21.988c-.359-.758-1.367-.758-1.726 0l-20.55 45.738 23.105-10.188a3.076 3.076 0 001.46-1.547l7.68-12.015zm0 0" fill="url(#b)"></path><defs><linearGradient id="a" x1="62.914" x2="105.172" y1="12.719" y2="119.75" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#bd34fe"></stop></linearGradient><linearGradient id="b" x1="69.806" x2="77.934" y1="12.719" y2="111.271" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"></stop><stop offset="0.083" stop-color="#ffdd35"></stop><stop offset="1" stop-color="#ffa800"></stop></linearGradient></defs>
          </svg>`
  },
  {
    name: 'Git',
    svg: `<svg viewBox="0 0 128 128" class="w-full h-full">
          <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
          </svg>`
  },
])
</script>

<style>
/* Floating / blob animations */
@keyframes slow-pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 0.8; }
}
.animate-slow-pulse { animation: slow-pulse 8s ease-in-out infinite; }

@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(20px, -10px) scale(1.05); }
  66% { transform: translate(-15px, 10px) scale(0.95); }
}
.animate-blob { animation: blob 10s infinite ease-in-out; }
.animation-delay-2000 { animation-delay: 2s; }

/* Floating bracket animations */
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
  50% { transform: translateY(-40px) rotate(180deg); opacity: 0.2; }
}
.animate-float-slow { animation: float-slow 25s ease-in-out infinite; }

@keyframes float-medium {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
  50% { transform: translateY(-30px) rotate(-180deg); opacity: 0.25; }
}
.animate-float-medium { animation: float-medium 20s ease-in-out infinite; }

@keyframes float-fast {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
  50% { transform: translateY(-20px) rotate(90deg); opacity: 0.3; }
}
.animate-float-fast { animation: float-fast 15s ease-in-out infinite; }

/* Fade-in animation */
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
.animate-fadeIn { 
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}
.animate-fadeIn.delay-100 { animation-delay: 0.1s; }
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }
.animate-fadeIn.delay-300 { animation-delay: 0.3s; }
.animate-fadeIn.delay-400 { animation-delay: 0.4s; }
.animate-fadeIn.delay-500 { animation-delay: 0.5s; }
.animate-fadeIn.delay-600 { animation-delay: 0.6s; }

/* Glowing card effect - Enhanced */
.glowing-card {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9));
  box-shadow:
    0 0 40px rgba(59, 130, 246, 0.2),
    0 0 80px rgba(59, 130, 246, 0.1),
    inset 0 0 30px rgba(59, 130, 246, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glowing-card:hover {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow:
    0 0 60px rgba(59, 130, 246, 0.3),
    0 0 100px rgba(59, 130, 246, 0.2),
    inset 0 0 40px rgba(59, 130, 246, 0.15);
  transform: translateY(-4px);
}

/* Glass morphism effects */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Enhanced shadows */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.3);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #0891b2);
}

/* Gradient text effect */
.text-gradient-blue {
  background: linear-gradient(135deg, #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Bounce animation */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce {
  animation: bounce 2s infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .rounded-3xl {
    border-radius: 1.5rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .rounded-3xl {
    border-radius: 1rem;
  }
  
  .p-8 {
    padding: 1rem;
  }
}

/* Hover shine effect */
.hover-shine {
  position: relative;
  overflow: hidden;
}

.hover-shine::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  transition: transform 0.6s;
  pointer-events: none;
}

.hover-shine:hover::after {
  transform: rotate(30deg) translate(20%, 20%);
}
</style>