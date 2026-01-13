<template>
  <footer class="relative px-6 md:px-20 py-16 bg-gradient-to-t from-slate-900 to-slate-800 text-white overflow-hidden">
    
    <!-- Subtle animated background blobs -->
    <div class="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

    <!-- Footer content -->
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold animate-fadeIn">Let’s Work Together</h2>
      <p class="text-gray-300 animate-fadeIn delay-200">
        Have a project or job opportunity? Let’s talk.
      </p>

      <!-- Updated button color -->
      <a href="mailto:tj@example.com"
         class="mt-4 inline-block px-8 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg 
                hover:scale-105 hover:bg-yellow-500 transition transform animate-fadeIn delay-400">
        Contact Me
      </a>

      <div class="mt-6 flex flex-wrap justify-center gap-6 animate-fadeIn delay-600">
        <a href="https://github.com/Teejay-d3v" target="_blank" 
           class="hover:text-yellow-400 transition transform hover:scale-110">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/timothy-john-lozada-b7461b248/" target="_blank" 
           class="hover:text-yellow-400 transition transform hover:scale-110">
          LinkedIn
        </a>
      </div>

      <p class="mt-8 text-gray-400 text-sm animate-fadeIn delay-800">
        © 2026 Timothy John Lozada. All rights reserved.
      </p>
    </div>
  </footer>
</template>
