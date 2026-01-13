<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
    
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('/images/bg-vue2.png')] bg-cover bg-center bg-no-repeat"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-slate-900/70"></div>

    <!-- Glass Content -->
<div
  class="relative z-10 p-8 md:p-12 rounded-2xl
         bg-white/10 backdrop-blur-lg border border-white/20
         max-w-3xl mx-auto flex flex-col gap-6"
>
  <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-fadeIn">
    Hi, I’m <span class="text-primary">TJ</span>
  </h1>

  <p class="text-lg md:text-xl text-gray-200 animate-fadeIn delay-200">
    I’m a <span class="text-primary font-semibold">frontend developer</span> specializing in building 
    <span class="text-primary font-semibold">interactive</span>, 
    <span class="text-primary font-semibold">responsive</span>, and 
    <span class="text-primary font-semibold">high-performance</span> web interfaces. 
  </p>


  <div class="flex flex-wrap gap-4 animate-fadeIn delay-400">
    <a
      href="#projects"
      class="px-6 py-3 bg-white/80 text-black font-semibold rounded-lg hover:bg-white transition"
    >
      View Projects
    </a>

    <a
      href="/Timothy-John-Lozada-CV.pdf"
      download
      class="px-6 py-3 bg-white/80 text-black font-semibold rounded-lg hover:bg-white transition"
    >
      Download CV
    </a>
  </div>
</div>


  </section>
</template>
