<template>
  <section
    id="projects"
    class="relative min-h-screen flex items-center p-6 md:px-20 overflow-hidden"
  >
   <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('/images/bg-vue2.png')] bg-cover bg-center bg-no-repeat"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div
      class="relative z-10
            bg-white/10 backdrop-blur-lg
            border border-white/20
            rounded-2xl p-6 md:p-10
            transition animate-fadeIn
            glowing-border-blue"

    >
      <h2 class="text-4xl font-bold mb-10 text-white animate-fadeIn">
        Projects
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Ghibli App -->
        <div
          class="bg-white/5 backdrop-blur-xl
                 border border-white/20
                 rounded-2xl p-6
                 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400/50
                 transition-transform transform"
        >
          <div class="h-48 w-full overflow-hidden rounded-xl mb-4">
            <img
              src="/projects/ghibli-app.png"
              alt="Ghibli App screenshot"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-white">
            Ghibli App
          </h3>
          <p class="mb-4 text-gray-300">
            Nuxt 3 app fetching Studio Ghibli movies from an API.
            Features pagination, search, and responsive design.
          </p>
          <a
            href="https://exam-ghibli-app.vercel.app/"
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            Live Demo →
          </a>
        </div>

        <!-- Nuxt Tables -->
        <div
          class="bg-white/5 backdrop-blur-xl
                 border border-white/20
                 rounded-2xl p-6
                 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400/50
                 transition-transform transform"
        >
          <div class="h-48 w-full overflow-hidden rounded-xl mb-4">
            <img
              src="/projects/nuxt-tables.png"
              alt="Nuxt Tables screenshot"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-white">
            Nuxt Tables
          </h3>
          <p class="mb-4 text-gray-300 text-sm sm:text-base">
            Interactive tables demonstrating modern Nuxt 3 & Tailwind CSS
            patterns with API-driven data handling.
          </p>
          <a
            href="https://nuxt-tables.vercel.app/"
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            Live Demo →
          </a>
        </div>

        <!-- Budget Planner -->
        <div
          class="bg-white/5 backdrop-blur-xl
                 border border-white/20
                 rounded-2xl p-6
                 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400/50
                 transition-transform transform "
        >
          <div class="h-48 w-full overflow-hidden rounded-xl mb-4">
            <img
              src="/projects/budgetplanner.png"
              alt="Nuxt Budget Planner screenshot"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-white">
            Budget Planner
          </h3>
          <p class="mb-4 text-gray-300 text-sm sm:text-base">
            A personal finance tracker built with Nuxt 3 and Tailwind CSS.
            Features income & expense tracking, category filtering, and
            a clean dashboard-style UI.
          </p>
          <a
            href="https://budget-planner-azure.vercel.app/personal-budget-planner/"
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            Live Demo →
          </a>
        </div>


        <!-- Todo Board -->
        <div
          class="bg-white/5 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-6
                hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400/50
                transition-transform transform"
        >
          <div class="h-48 w-full overflow-hidden rounded-xl mb-4">
            <img
              src="/projects/todoboard.png"
              alt="Todo Board screenshot"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-white">
            Todo Board
          </h3>
          <p class="mb-4 text-gray-300 text-sm sm:text-base">
            A fully interactive Kanban-style Todo board built with Nuxt 3, Vue 3, Tailwind CSS, and draggable cards. Features task priority, status columns, due dates, and a smooth drag-and-drop interface.
          </p>
          <a
            href="https://nuxt-todo-board.vercel.app/"
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            Live Demo →
          </a>
        </div>


      </div>
    </div>

    <!-- Scroll Indicator -->
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

<style scoped>
/* Floating / blob animations */
@keyframes slow-pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 0.8; }
}
.animate-slow-pulse {
  animation: slow-pulse 8s ease-in-out infinite;
}

@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(20px, -10px) scale(1.05); }
  66% { transform: translate(-15px, 10px) scale(0.95); }
}
.animate-blob {
  animation: blob 10s infinite ease-in-out;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

/* Fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s forwards;
}
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }
.animate-fadeIn.delay-400 { animation-delay: 0.4s; }
.animate-fadeIn.delay-600 { animation-delay: 0.6s; }

/* Blue glowing border (STRONGER HOVER, SAME STYLE) */
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

</style>
