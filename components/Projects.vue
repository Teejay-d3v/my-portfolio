<template>
  <section
    id="projects"
    class="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-900"></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
<div
  class="glowing-card bg-white/5 backdrop-blur-xl rounded-2xl p-6
         hover:scale-105 hover:shadow-2xl transition animate-fadeIn"
>
      <h2 class="text-4xl font-bold mb-10 text-white animate-fadeIn">
        Projects
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Ghibli App -->
        <div
          class="bg-white/5 backdrop-blur-xl rounded-2xl p-6
                 hover:scale-105 hover:shadow-2xl transition
                 animate-fadeIn"
        >
          <img
            src="/projects/ghibli-app.png"
            alt="Ghibli App screenshot"
            class="rounded-xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2 text-white">
            Ghibli App
          </h3>
          <p class="mb-4 text-gray-300">
            Nuxt 3 app fetching Studio Ghibli movies from an API. Features pagination, search, and responsive design.
          </p>
          <a
            href="https://exam-ghibli-app.vercel.app/"
            target="_blank"
            class="text-primary hover:underline"
          >
            Live Demo →
          </a>
        </div>

        <!-- Fresh & Clean Helmet -->
        <div
          class="bg-white/5 backdrop-blur-xl rounded-2xl p-6
                 hover:scale-105 hover:shadow-2xl transition
                 animate-fadeIn delay-200"
        >
          <img
            src="/projects/freshandclean-helmet.png"
            alt="Fresh & Clean Helmet screenshot"
            class="rounded-xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2 text-white">
            Fresh & Clean Helmet
          </h3>
          <p class="mb-4 text-gray-300">
            A product catalog and ordering web app. Built with Nuxt 3 & Tailwind CSS, fully responsive and clean UI.
          </p>
          <a
            href="https://freshand-clean-helmet.vercel.app/"
            target="_blank"
            class="text-primary hover:underline"
          >
            Live Demo →
          </a>
        </div>

        <!-- Nuxt Tables -->
        <div
          class="bg-white/5 backdrop-blur-xl rounded-2xl p-6
                 hover:scale-105 hover:shadow-2xl transition
                 animate-fadeIn delay-400"
        >
          <img
            src="/projects/nuxt-tables.png"
            alt="Nuxt Tables screenshot"
            class="rounded-xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2 text-white">
            Nuxt Tables
          </h3>
          <p class="mb-4 text-gray-300 text-sm sm:text-base">
            Interactive tables demonstrating modern Nuxt 3 & Tailwind CSS patterns with API-driven data handling.
          </p>
          <a
            href="https://nuxt-tables.vercel.app/"
            target="_blank"
            class="text-primary hover:underline"
          >
            Live Demo →
          </a>
        </div>

        
      </div>
      
    </div>
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <a href="#contact" class="hover:text-primary transition">
        <svg
          class="w-6 h-6 text-orange-400"
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
      </a>
    </div>
  </section>
</template>
<style lang="css" scoped>

  .glow-card {
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 0 10px rgba(255,255,255,0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
}
.glow-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: inherit;
  background: linear-gradient(270deg, #facc15, #3b82f6, #ec4899, #facc15);
  background-size: 600% 600%;
  z-index: -1;
  filter: blur(6px);
  opacity: 0.7;
  animation: glow 10s ease infinite;
}
.glow-card:hover::before {
  opacity: 1;
}
@keyframes glow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

</style>