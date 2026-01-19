<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('/images/bg-vue2.png')] bg-cover bg-center bg-no-repeat"
    ></div>

    <!-- Base Dark Overlay -->
    <div class="absolute inset-0 bg-slate-900/70"></div>

    <!-- Subtle Blue Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent"
    ></div>

    <!-- Floating Animated Blobs -->
    <div
      class="absolute top-1/3 left-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-slow-pulse"
    ></div>
    <div
      class="absolute top-1/2 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"
    ></div>

    <!-- Glass Content Card with glowing border -->
    <div
      class="relative z-10 p-8 md:p-12 rounded-2xl
             bg-white/10 backdrop-blur-lg border border-blue-400
             max-w-3xl
             mx-auto md:mx-0 md:mr-auto
             flex flex-col gap-6 shadow-inner glowing-card"
    >
      <!-- Heading -->
      <h1
        class="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-fadeIn"
      >
        Hi, I’m <span class="text-blue-400">TeeJay</span>
      </h1>

      <!-- Intro Paragraph -->
      <p class="text-lg md:text-xl text-gray-200 animate-fadeIn delay-200">
        I’m a <span class="text-blue-400 font-semibold">frontend developer</span> specializing in
        building <span class="text-blue-400 font-semibold">interactive</span>,
        <span class="text-blue-400 font-semibold">responsive</span>, and
        <span class="text-blue-400 font-semibold">high-performance</span> web interfaces.
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap gap-4 animate-fadeIn delay-400">
        <a
          href="#projects"
          class="px-6 py-3 bg-blue-400 text-slate-900 font-semibold rounded-lg
                 hover:bg-blue-300 hover:shadow-xl transition transform duration-300"
        >
          View Projects
        </a>

        <a
          href="/Timothy-John-Lozada-CV.pdf"
          download
          class="px-6 py-3 bg-white/80 text-black font-semibold rounded-lg
                 hover:bg-white hover:shadow-lg transition transform duration-300"
        >
          Download CV
        </a>
      </div>
    </div>

    <!-- Scroll Cue Arrow -->
<div
  class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
>
  <a href="#about" class="hover:text-primary transition">
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

<script setup>
// No additional logic needed
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

/* Fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 1s forwards; }
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }
.animate-fadeIn.delay-400 { animation-delay: 0.4s; }

/* Glowing card effect */
.glowing-card {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.5); /* blue-500 */
  box-shadow:
    0 0 10px rgba(59, 130, 246, 0.6),
    0 0 20px rgba(59, 130, 246, 0.4),
    0 0 40px rgba(59, 130, 246, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

/* Pulse glow on hover */
.glowing-card:hover {
  box-shadow:
    0 0 20px rgba(59, 130, 246, 0.7),
    0 0 40px rgba(59, 130, 246, 0.5),
    0 0 60px rgba(59, 130, 246, 0.3);
}
</style>
