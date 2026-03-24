<template>
  <section   class="portfolio-section">
    <!-- Overlay -->
    <div class="section-overlay"></div>

    <!-- Floating elements - matching other sections -->
    <div class="floating-elements">
      <div
        v-for="i in 12"
        :key="i"
        class="floating-circle"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${15 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.5}s`
        }"
      ></div>
    </div>

    <!-- Grid pattern - matching other sections -->
    <div class="absolute inset-0 grid-pattern opacity-30"></div>

    <!-- Content -->
    <div id="skills" class="section-anchor relative z-10 w-full">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <!-- Section Header - matching other sections -->
        <div class="text-center mb-12 animate-fadeInUp">
          <div class="section-badge mx-auto">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
            <span>Expertise</span>
          </div>
          <h2 class="section-title">
            Technical <span>Skills</span>
          </h2>
          <p class="section-subtitle mt-4">
            Technologies and tools I use to build production-ready applications
          </p>
        </div>

        <!-- Skills Grid - Professional Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(category, index) in skillCategories"
            :key="category.name"
            class="portfolio-card p-6 animate-fadeInUp hover:border-blue-400/50 transition-all duration-300"
            :class="`delay-${index * 100}`"
          >
            <!-- Category Header -->
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span class="text-2xl">{{ category.icon }}</span>
              </div>
              <h3 class="text-xl font-semibold text-white">{{ category.name }}</h3>
            </div>

            <!-- Skills List -->
            <div class="space-y-4">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="group relative"
              >
                <!-- Skill Header -->
                <div class="flex justify-between items-center mb-1">
                  <span class="text-gray-300 group-hover:text-blue-400 transition-colors">
                    {{ skill.name }}
                  </span>
                  <span class="text-sm text-gray-500">{{ skill.experience }}</span>
                </div>

                <!-- Progress Bar -->
                <div class="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>

                <!-- Tags - shown on hover -->
                <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-10">
                  <div class="flex gap-2">
                    <span class="text-blue-400">{{ skill.tags[0] }}</span>
                  </div>
                  <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-white/10"></div>
                </div>
              </div>
            </div>

            <!-- Category Stats -->
            <div class="mt-6 pt-4 border-t border-white/10 text-sm">
              <span class="text-gray-400">{{ category.skills.length }} technologies</span>
            </div>
          </div>
        </div>

        <!-- Professional Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp delay-300">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="portfolio-card p-6 text-center hover:border-blue-400/30 transition-all duration-300"
          >
            <div class="text-3xl font-bold text-blue-400 mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Currently Learning - Professional Section -->
        <div class="mt-16 portfolio-card p-8 animate-fadeInUp delay-400">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
            <!-- Icon -->
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
              <p class="text-gray-400 text-sm mb-4">Currently expanding my skills in these areas</p>

              <div class="flex flex-wrap gap-3">
                <div
                  v-for="tech in learning"
                  :key="tech.name"
                  class="px-4 py-2 glass-light rounded-lg text-sm flex items-center gap-2"
                >
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-gray-300">{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool Ecosystem -->
        <div class="mt-16 animate-fadeInUp delay-500">
          <h3 class="text-lg font-semibold text-white text-center mb-6">Development Ecosystem</h3>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="tool in tools"
              :key="tool.name"
              class="px-4 py-2 glass-light rounded-lg text-sm text-gray-300 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300 cursor-default"
            >
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    name: 'Frontend Development',
    icon: 'FE',
    skills: [
      { name: 'Vue 3 / Nuxt 3', level: 95, experience: '3+ years', tags: ['SPA', 'SSR', 'Composition API'] },
      { name: 'TypeScript', level: 85, experience: '2+ years', tags: ['Types', 'Interfaces', 'Generics'] },
      { name: 'Tailwind CSS', level: 95, experience: '3+ years', tags: ['Responsive', 'Custom'] },
      { name: 'JavaScript (ES6+)', level: 95, experience: '4+ years', tags: ['Async', 'DOM', 'ES6'] },
      { name: 'HTML5 / CSS3', level: 98, experience: '4+ years', tags: ['Semantic', 'Flex/Grid'] }
    ]
  },
  {
    name: 'Backend & API',
    icon: 'API',
    skills: [
      { name: 'RESTful APIs', level: 85, experience: '3+ years', tags: ['Integration', 'Design'] },
      { name: 'API Authentication', level: 80, experience: '2+ years', tags: ['JWT', 'OAuth'] },
      { name: 'Supabase', level: 75, experience: '1+ years', tags: ['Auth', 'Realtime'] },
      { name: 'MySQL', level: 70, experience: '1+ years', tags: ['Queries', 'Design'] }
    ]
  },
  {
    name: 'Development Tools',
    icon: 'DEV',
    skills: [
      { name: 'Git & GitHub', level: 90, experience: '4+ years', tags: ['Version Control', 'CI/CD'] },
      { name: 'VS Code', level: 95, experience: '4+ years', tags: ['Extensions', 'Debugging'] },
      { name: 'Vite / Webpack', level: 80, experience: '2+ years', tags: ['Build Tools', 'Optimization'] },
      { name: 'Vitest', level: 65, experience: '< 1 year', tags: ['Testing', 'Coverage'] },
      { name: 'Postman', level: 85, experience: '3+ years', tags: ['API Testing', 'Collections'] }
    ]
  }
])

const stats = ref([
  { value: '2', label: 'Web Dev Employers' },
  { value: '4+', label: 'Years Experience' },
  { value: 'Frontend', label: 'Primary Focus' },
  { value: 'Full-time', label: 'Work Experience' }
])

const learning = ref([
  { name: 'Node.js' },
  { name: 'React / Next.js' },
  { name: 'GraphQL' }
])

const tools = ref([
  { name: 'Figma' },
  { name: 'Vercel' },
  { name: 'Netlify' },
  { name: 'GitHub Actions' },
  { name: 'ESLint' },
  { name: 'Prettier' },
  { name: 'Husky' },
  { name: 'pnpm' },
  { name: 'Chrome DevTools' },
  { name: 'Insomnia' }
])
</script>

<style scoped>
.h-1\.5 {
  transition: width 1s ease-in-out;
}

.portfolio-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card:hover {
  transform: translateY(-2px);
}

.group:hover .group-hover\:opacity-100 {
  transition: opacity 0.2s ease;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #0891b2);
}

.glass-light {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.delay-0 { animation-delay: 0ms; }
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

@media (max-width: 768px) {
  .portfolio-card {
    padding: 1.25rem;
  }
}
</style>
