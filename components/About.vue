<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden"
  >
   <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('/images/bg-vue2.png')] bg-cover bg-center bg-no-repeat"
    ></div>

   <!-- Base Dark Overlay -->
    <div class="absolute inset-0 bg-slate-900/70"></div>

    <!-- Floating Blobs -->
    <div
      class="absolute top-1/4 left-20 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-slow-pulse"
    ></div>
    <div
      class="absolute bottom-1/4 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"
    ></div>

    <!-- Glass Content Card (aligned right) -->
    <div
      class="relative z-10 w-full max-w-3xl
             bg-black/50 backdrop-blur-lg border border-white/20
             rounded-2xl p-8 md:p-12
             flex flex-col gap-6 shadow-inner
             ml-auto glowing-border-blue"
    >
      <h2 class="text-4xl md:text-5xl font-extrabold text-white animate-fadeIn">
        About Me
      </h2>

      <p class="text-lg text-gray-300 animate-fadeIn delay-200">
        🚀 I’m a <span class="text-blue-400 font-semibold">Frontend Developer</span> building modern web applications with
        <span class="text-blue-400 font-semibold">Nuxt 3</span>, 
        <span class="text-blue-400 font-semibold">Vue 3</span>, and 
        <span class="text-blue-400 font-semibold">Tailwind CSS</span>.
      </p>

      <p class="text-gray-300 leading-relaxed animate-fadeIn delay-400">
        I focus on writing <span class="text-white font-semibold">clean, maintainable code</span>,
        creating <span class="text-white font-semibold">reusable components</span>,
        and crafting <span class="text-white font-semibold">great user experiences</span>.
      </p>

      <p class="text-white leading-relaxed animate-fadeIn delay-600">
        Passionate about <span class="text-white font-semibold">responsive design</span>, 
        <span class="text-white font-semibold">performance optimization</span>, and continuously learning new technologies
        to stay ahead in modern frontend development.
      </p>
    </div>
<div
  class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
>
  <a href="#skills" class="hover:text-primary transition">
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
// No logic needed
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
.animate-fadeIn.delay-600 { animation-delay: 0.6s; }

/* Blue glowing border */
.glowing-border-blue {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.5); /* Tailwind blue-500 with transparency */
  box-shadow:
    0 0 10px rgba(59, 130, 246, 0.5),
    0 0 20px rgba(59, 130, 246, 0.3),
    0 0 30px rgba(59, 130, 246, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

/* Optional: pulse glow on hover */
.glowing-border-blue:hover {
  box-shadow:
    0 0 15px rgba(59, 130, 246, 0.6),
    0 0 25px rgba(59, 130, 246, 0.4),
    0 0 40px rgba(59, 130, 246, 0.3);
}
</style>
