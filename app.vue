<template>
  <div class="min-h-screen text-gray-100 relative overflow-hidden">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
    
    <!-- Optional: Particle effects -->
    <div class="particles-container absolute inset-0 z-1"></div>
    
    <!-- Content layer -->
    <div class="relative z-10 ">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
// For particle effects, consider using @tsparticles/vue3
</script>

<style>
/* Add smooth transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.5);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 116, 139, 0.8);
}
</style>