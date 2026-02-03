<template>
  <div class="absolute inset-0 overflow-hidden">
    <!-- Animated particles -->
    <div class="absolute inset-0">
      <div 
        v-for="i in 15" 
        :key="i" 
        class="absolute rounded-full animate-float"
        :style="{
          width: `${Math.random() * 4 + 1}px`,
          height: `${Math.random() * 4 + 1}px`,
          background: `radial-gradient(circle, rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, 0.3) 0%, transparent 70%)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`
        }"
      ></div>
    </div>
    
    <!-- Animated gradient orbs -->
    <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>
  </div>
</template>

<script setup>
// This is a simplified particles component
// For more advanced particles, consider using @tsparticles/vue3
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(10px) translateX(-20px);
  }
  75% {
    transform: translateY(-10px) translateX(15px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

.animate-float {
  animation: float linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}
</style>