import { ref, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$5 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = ref([
      { value: "3+", label: "Years Experience" },
      { value: "20+", label: "Projects" },
      { value: "100%", label: "Satisfaction" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "portfolio-section"
      }, _attrs))}><div class="section-overlay"></div><div class="floating-elements"><!--[-->`);
      ssrRenderList(12, (i) => {
        _push(`<div class="floating-circle" style="${ssrRenderStyle({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${15 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.5}s`
        })}"></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 grid-pattern opacity-30"></div><div class="section-anchor relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)] gap-12"><div class="flex-1 space-y-8 text-center lg:text-left"><div class="section-badge inline-flex mx-auto lg:mx-0"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span><span>Available for work</span></div><div class="space-y-4 animate-fadeInUp"><h1 class="section-title"> Hi, I&#39;m <span>T-Jay</span></h1><h2 class="text-3xl md:text-4xl text-gray-200 font-semibold"> Frontend Developer </h2></div><p class="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInUp delay-100"> I build exceptional digital experiences with <span class="text-blue-400 font-semibold">Vue.js</span> and <span class="text-blue-400 font-semibold">Nuxt.js</span>. Specialized in creating performant, accessible, and beautiful web applications. </p><div class="flex flex-wrap gap-4 justify-center lg:justify-start animate-fadeInUp delay-200"><a href="#projects" class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden"><span class="relative z-10 flex items-center gap-2"> View My Work <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span><span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span></a><a href="#contact" class="group px-8 py-4 glass-light text-white font-semibold rounded-xl hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300 flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> Let&#39;s Talk </a></div><div class="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0 animate-fadeInUp delay-300"><!--[-->`);
      ssrRenderList(stats.value, (stat) => {
        _push(`<div class="text-center"><div class="text-2xl font-bold text-blue-400">${ssrInterpolate(stat.value)}</div><div class="text-sm text-gray-400">${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 hidden lg:block animate-fadeInUp delay-200"><div class="relative"><div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div><div class="relative glass-dark rounded-2xl overflow-hidden border border-blue-400/30"><div class="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10"><div class="w-3 h-3 bg-red-400 rounded-full"></div><div class="w-3 h-3 bg-yellow-400 rounded-full"></div><div class="w-3 h-3 bg-green-400 rounded-full"></div><span class="text-xs text-gray-400 ml-2">portfolio.vue</span></div><div class="p-6 font-mono text-sm"><pre class="text-gray-300"><span class="text-blue-400">&lt;template&gt;</span>
  <span class="text-purple-400">&lt;div</span> <span class="text-green-400">class=</span><span class="text-yellow-400">&quot;hero&quot;</span><span class="text-purple-400">&gt;</span>
    <span class="text-blue-400">&lt;h1&gt;</span>Creative Developer<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;p&gt;</span>Building the web of tomorrow<span class="text-blue-400">&lt;/p&gt;</span>
  <span class="text-purple-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span></pre></div></div><div class="absolute -top-4 -right-4 w-16 h-16 glass-gradient rounded-xl p-3 animate-float-slow"><svg class="w-full h-full" viewBox="0 0 128 128"><path fill="#41b883" d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"></path><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"></path><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"></path></svg></div><div class="absolute -bottom-4 -left-4 w-16 h-16 glass-gradient rounded-xl p-3 animate-float-medium"><svg class="w-full h-full" viewBox="0 0 128 128"><path fill="#00dc82" d="M71.679 106.667h47.359c1.514 0 2.962-.533 4.268-1.283 1.307-.75 2.66-1.688 3.415-2.986.755-1.298 1.279-2.769 1.279-4.264s-.524-2.971-1.279-4.268l-32-55.038c-.755-1.297-1.68-2.24-2.99-2.991-1.312-.751-3.18-1.279-4.695-1.279-1.514 0-2.957.533-4.263 1.279-1.307.746-2.232 1.693-2.987 2.991l-8.108 14.08-16.213-27.311c-.755-1.297-1.68-2.66-2.986-3.41-1.307-.75-2.755-.854-4.269-.854-1.514 0-2.957.104-4.264.854-1.306.75-2.66 2.113-3.415 3.41L.854 93.864C.099 95.161 0 96.634 0 98.134c0 1.499.099 2.966.854 4.263.754 1.297 2.103 2.24 3.415 2.986 1.311.747 2.754 1.284 4.264 1.284H38.4c11.835 0 20.449-5.31 26.453-15.364l14.505-25.17 7.678-13.226 23.468 40.104H79.359ZM37.97 93.01H17.066l31.147-53.76L64 66.134 53.543 84.361c-3.986 6.523-8.533 8.65-15.572 8.65zm0 0"></path></svg></div></div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeInUp delay-500"><a href="#about" class="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"><span class="text-sm">Scroll to explore</span><svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7-7-7m14-6l-7 7-7-7"></path></svg></a></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const floatingElements = ref(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${14 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.35}s`
        }
      }))
    );
    const bioItems = ref([
      { icon: "LOC", label: "Location", value: "Philippines" },
      { icon: "EXP", label: "Experience", value: "3+ Years" },
      { icon: "PRO", label: "Projects", value: "20+" },
      { icon: "VUE", label: "Specialty", value: "Vue.js" }
    ]);
    const quickFacts = ref([
      "Vue.js Specialist",
      "Responsive Design Expert",
      "Performance Optimizer",
      "Clean Code Advocate",
      "Team Player",
      "Problem Solver"
    ]);
    const interests = ref([
      "Open Source",
      "UI/UX Design",
      "Web Performance",
      "New Technologies",
      "Gaming",
      "Music"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "portfolio-section"
      }, _attrs))}><div class="section-overlay"></div><div class="floating-elements"><!--[-->`);
      ssrRenderList(floatingElements.value, (element) => {
        _push(`<div class="floating-circle" style="${ssrRenderStyle(element.style)}"></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 grid-pattern opacity-30"></div><div class="section-anchor relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12 animate-fadeInUp"><div class="section-badge mx-auto"><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span>Who I Am</span></div><h2 class="section-title"> About <span>Me</span></h2></div><div class="grid lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-4 animate-fadeInUp"><div class="sticky top-24"><div class="relative group"><div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div><div class="relative glass-dark rounded-2xl overflow-hidden aspect-square"><div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"><svg class="w-1/2 h-1/2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div><div class="absolute bottom-4 right-4"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div></div></div></div></div><div class="lg:col-span-5 space-y-6 animate-fadeInUp delay-100"><div class="portfolio-card p-8"><h3 class="text-2xl font-bold text-white mb-4"> Frontend Developer with a Creative Touch </h3><p class="text-gray-300 leading-relaxed mb-6"> I&#39;m a passionate frontend developer with <span class="text-blue-400 font-semibold">3+ years of experience</span> building modern web applications. My journey in web development started with a curiosity for creating beautiful, functional interfaces, and has evolved into a career focused on delivering exceptional user experiences. </p><p class="text-gray-300 leading-relaxed mb-6"> I specialize in <span class="text-blue-400 font-semibold">Vue.js</span> and <span class="text-blue-400 font-semibold">Nuxt.js</span>, but I&#39;m always eager to learn new technologies and approaches. I believe in writing clean, maintainable code and creating applications that are both performant and accessible. </p><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(bioItems.value, (item) => {
        _push(`<div class="flex items-center gap-3 p-3 glass-light rounded-lg"><span class="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-cyan-400/35 bg-cyan-500/10 px-1 text-xs font-semibold tracking-wide text-cyan-300">${ssrInterpolate(item.icon)}</span><div><div class="text-xs text-gray-400">${ssrInterpolate(item.label)}</div><div class="text-sm text-white font-semibold">${ssrInterpolate(item.value)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-3 space-y-6 animate-fadeInUp delay-200"><div class="portfolio-card p-6"><h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2"><svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Quick Facts </h4><ul class="space-y-3"><!--[-->`);
      ssrRenderList(quickFacts.value, (fact) => {
        _push(`<li class="flex items-center gap-3 text-gray-300"><div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div><span class="text-sm">${ssrInterpolate(fact)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="portfolio-card p-6"><h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2"><svg class="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Interests </h4><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(interests.value, (interest) => {
        _push(`<span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">${ssrInterpolate(interest)}</span>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const skillCategories = ref([
      {
        name: "Frontend Development",
        icon: "FE",
        skills: [
          { name: "Vue 3 / Nuxt 3", level: 95, experience: "3+ years", tags: ["SPA", "SSR", "Composition API"] },
          { name: "TypeScript", level: 85, experience: "2+ years", tags: ["Types", "Interfaces", "Generics"] },
          { name: "Tailwind CSS", level: 95, experience: "3+ years", tags: ["Responsive", "Custom"] },
          { name: "JavaScript (ES6+)", level: 95, experience: "4+ years", tags: ["Async", "DOM", "ES6"] },
          { name: "HTML5 / CSS3", level: 98, experience: "4+ years", tags: ["Semantic", "Flex/Grid"] }
        ]
      },
      {
        name: "Backend & API",
        icon: "API",
        skills: [
          { name: "RESTful APIs", level: 85, experience: "3+ years", tags: ["Integration", "Design"] },
          { name: "API Authentication", level: 80, experience: "2+ years", tags: ["JWT", "OAuth"] },
          { name: "Supabase", level: 75, experience: "1+ years", tags: ["Auth", "Realtime"] },
          { name: "MySQL", level: 70, experience: "1+ years", tags: ["Queries", "Design"] }
        ]
      },
      {
        name: "Development Tools",
        icon: "DEV",
        skills: [
          { name: "Git & GitHub", level: 90, experience: "4+ years", tags: ["Version Control", "CI/CD"] },
          { name: "VS Code", level: 95, experience: "4+ years", tags: ["Extensions", "Debugging"] },
          { name: "Vite / Webpack", level: 80, experience: "2+ years", tags: ["Build Tools", "Optimization"] },
          { name: "Vitest", level: 65, experience: "< 1 year", tags: ["Testing", "Coverage"] },
          { name: "Postman", level: 85, experience: "3+ years", tags: ["API Testing", "Collections"] }
        ]
      }
    ]);
    const stats = ref([
      { value: "2", label: "Web Dev Employers" },
      { value: "4+", label: "Years Experience" },
      { value: "Frontend", label: "Primary Focus" },
      { value: "Full-time", label: "Work Experience" }
    ]);
    const learning = ref([
      { name: "Node.js" },
      { name: "React / Next.js" },
      { name: "GraphQL" }
    ]);
    const tools = ref([
      { name: "Figma" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "GitHub Actions" },
      { name: "ESLint" },
      { name: "Prettier" },
      { name: "Husky" },
      { name: "pnpm" },
      { name: "Chrome DevTools" },
      { name: "Insomnia" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "portfolio-section"
      }, _attrs))} data-v-9ddc38e3><div class="section-overlay" data-v-9ddc38e3></div><div class="floating-elements" data-v-9ddc38e3><!--[-->`);
      ssrRenderList(12, (i) => {
        _push(`<div class="floating-circle" style="${ssrRenderStyle({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${15 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.5}s`
        })}" data-v-9ddc38e3></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 grid-pattern opacity-30" data-v-9ddc38e3></div><div class="section-anchor relative z-10 w-full" data-v-9ddc38e3><div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" data-v-9ddc38e3><div class="text-center mb-12 animate-fadeInUp" data-v-9ddc38e3><div class="section-badge mx-auto" data-v-9ddc38e3><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9ddc38e3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" data-v-9ddc38e3></path></svg><span data-v-9ddc38e3>Expertise</span></div><h2 class="section-title" data-v-9ddc38e3> Technical <span data-v-9ddc38e3>Skills</span></h2><p class="section-subtitle mt-4" data-v-9ddc38e3> Technologies and tools I use to build production-ready applications </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-9ddc38e3><!--[-->`);
      ssrRenderList(skillCategories.value, (category, index2) => {
        _push(`<div class="${ssrRenderClass([`delay-${index2 * 100}`, "portfolio-card p-6 animate-fadeInUp hover:border-blue-400/50 transition-all duration-300"])}" data-v-9ddc38e3><div class="flex items-center gap-3 mb-6" data-v-9ddc38e3><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center" data-v-9ddc38e3><span class="text-2xl" data-v-9ddc38e3>${ssrInterpolate(category.icon)}</span></div><h3 class="text-xl font-semibold text-white" data-v-9ddc38e3>${ssrInterpolate(category.name)}</h3></div><div class="space-y-4" data-v-9ddc38e3><!--[-->`);
        ssrRenderList(category.skills, (skill) => {
          _push(`<div class="group relative" data-v-9ddc38e3><div class="flex justify-between items-center mb-1" data-v-9ddc38e3><span class="text-gray-300 group-hover:text-blue-400 transition-colors" data-v-9ddc38e3>${ssrInterpolate(skill.name)}</span><span class="text-sm text-gray-500" data-v-9ddc38e3>${ssrInterpolate(skill.experience)}</span></div><div class="h-1.5 bg-white/10 rounded-full overflow-hidden" data-v-9ddc38e3><div class="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000" style="${ssrRenderStyle({ width: skill.level + "%" })}" data-v-9ddc38e3></div></div><div class="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-10" data-v-9ddc38e3><div class="flex gap-2" data-v-9ddc38e3><span class="text-blue-400" data-v-9ddc38e3>${ssrInterpolate(skill.tags[0])}</span></div><div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-white/10" data-v-9ddc38e3></div></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-6 pt-4 border-t border-white/10 text-sm" data-v-9ddc38e3><span class="text-gray-400" data-v-9ddc38e3>${ssrInterpolate(category.skills.length)} technologies</span></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp delay-300" data-v-9ddc38e3><!--[-->`);
      ssrRenderList(stats.value, (stat) => {
        _push(`<div class="portfolio-card p-6 text-center hover:border-blue-400/30 transition-all duration-300" data-v-9ddc38e3><div class="text-3xl font-bold text-blue-400 mb-2" data-v-9ddc38e3>${ssrInterpolate(stat.value)}</div><div class="text-sm text-gray-400" data-v-9ddc38e3>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 portfolio-card p-8 animate-fadeInUp delay-400" data-v-9ddc38e3><div class="flex flex-col md:flex-row items-start md:items-center gap-6" data-v-9ddc38e3><div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0" data-v-9ddc38e3><svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9ddc38e3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-9ddc38e3></path></svg></div><div class="flex-1" data-v-9ddc38e3><h4 class="text-lg font-semibold text-white mb-2" data-v-9ddc38e3>Continuous Learning</h4><p class="text-gray-400 text-sm mb-4" data-v-9ddc38e3>Currently expanding my skills in these areas</p><div class="flex flex-wrap gap-3" data-v-9ddc38e3><!--[-->`);
      ssrRenderList(learning.value, (tech) => {
        _push(`<div class="px-4 py-2 glass-light rounded-lg text-sm flex items-center gap-2" data-v-9ddc38e3><span class="w-2 h-2 bg-green-400 rounded-full" data-v-9ddc38e3></span><span class="text-gray-300" data-v-9ddc38e3>${ssrInterpolate(tech.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mt-16 animate-fadeInUp delay-500" data-v-9ddc38e3><h3 class="text-lg font-semibold text-white text-center mb-6" data-v-9ddc38e3>Development Ecosystem</h3><div class="flex flex-wrap justify-center gap-3" data-v-9ddc38e3><!--[-->`);
      ssrRenderList(tools.value, (tool) => {
        _push(`<span class="px-4 py-2 glass-light rounded-lg text-sm text-gray-300 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300 cursor-default" data-v-9ddc38e3>${ssrInterpolate(tool.name)}</span>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9ddc38e3"]]);
const _sfc_main$2 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const filters = ["All", "Nuxt 3", "Vue 3", "API", "Dashboard", "Productivity"];
    const activeFilter = ref("All");
    const selectedProject = ref(null);
    const projects = ref([
      {
        title: "Ghibli App",
        description: "Nuxt 3 app fetching Studio Ghibli movies from an API. Features pagination, search, and responsive design.",
        fullDescription: "A beautifully designed movie discovery platform built with Nuxt 3, featuring Studio Ghibli films. This application demonstrates modern frontend practices with server-side rendering, API integration, and responsive design. Includes advanced filtering options, infinite scroll, and detailed movie information pages.",
        image: "/projects/ghibli-app.png",
        demo: "https://exam-ghibli-app.vercel.app/",
        github: "https://github.com/Teejay-d3v/ghibli-app",
        tech: ["Nuxt 3", "Vue 3", "Tailwind CSS", "API Integration", "Responsive Design"],
        type: "Web App",
        year: "2024",
        features: [
          "Movie discovery with Studio Ghibli API",
          "Advanced search and filtering",
          "Responsive design for all devices",
          "Pagination and infinite scroll",
          "Detailed movie information pages"
        ]
      },
      {
        title: "Nuxt Tables",
        description: "Interactive tables with sorting, filtering, and real-time data updates.",
        fullDescription: "A comprehensive table management system built with Nuxt 3, showcasing advanced table features including sorting, filtering, pagination, and real-time data updates. Perfect for dashboard applications requiring complex data visualization.",
        image: "/projects/nuxt-tables.png",
        demo: "https://nuxt-tables.vercel.app/",
        github: "https://github.com/Teejay-d3v/nuxt-tables",
        tech: ["Nuxt 3", "Vue 3", "Tailwind CSS", "TypeScript", "Data Tables"],
        type: "UI Library",
        year: "2024",
        features: [
          "Sortable and filterable columns",
          "Server-side pagination",
          "Real-time data updates",
          "Export to CSV/Excel",
          "Mobile-responsive design"
        ]
      },
      {
        title: "Budget Planner",
        description: "Personal finance tracker with income/expense management and visual reports.",
        fullDescription: "Comprehensive personal finance management application that helps users track income, expenses, and savings goals. Features intuitive visualizations, budget planning tools, and financial insights to help users achieve their financial objectives.",
        image: "/projects/budgetplanner.png",
        demo: "https://budget-planner-azure.vercel.app/personal-budget-planner/",
        github: "https://github.com/Teejay-d3v/budget-planner",
        tech: ["Nuxt 3", "Vue 3", "Tailwind CSS", "Chart.js", "Supabase"],
        type: "Finance App",
        year: "2023",
        features: [
          "Income and expense tracking",
          "Category-based budgeting",
          "Financial goal setting",
          "Interactive charts and graphs",
          "Data export functionality"
        ]
      },
      {
        title: "Todo Board",
        description: "Kanban-style task management with drag-and-drop functionality.",
        fullDescription: "Modern task management application inspired by Kanban methodology. Features drag-and-drop functionality, task prioritization, due dates, and collaborative features. Perfect for personal productivity or team project management.",
        image: "/projects/todoboard.png",
        demo: "https://nuxt-todo-board.vercel.app/",
        github: "https://github.com/Teejay-d3v/nuxt-todo-board",
        tech: ["Nuxt 3", "Vue 3", "Tailwind CSS", "Drag & Drop", "Local Storage"],
        type: "Productivity",
        year: "2023",
        features: [
          "Drag-and-drop task management",
          "Multiple board views",
          "Task priority and due dates",
          "Progress tracking",
          "Mobile-optimized interface"
        ]
      },
      {
        title: "E-commerce Dashboard",
        description: "Admin dashboard with analytics, product management, and order tracking.",
        fullDescription: "Comprehensive e-commerce management platform designed for store administrators. Provides real-time insights into sales performance, inventory management, customer analytics, and order processing in a single dashboard.",
        image: "/projects/comingsoon.png",
        demo: "#",
        github: "https://github.com/Teejay-d3v",
        tech: ["Nuxt 3", "Vue 3", "Tailwind CSS", "Chart.js", "Supabase"],
        type: "Dashboard",
        year: "2024",
        features: [
          "Real-time sales analytics",
          "Product inventory management",
          "Customer behavior insights",
          "Order processing workflow",
          "Advanced reporting tools"
        ]
      }
    ]);
    const filteredProjects = computed(() => {
      if (activeFilter.value === "All") return projects.value;
      return projects.value.filter(
        (p) => p.tech.includes(activeFilter.value) || p.type.includes(activeFilter.value)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "portfolio-section"
      }, _attrs))} data-v-3a80a6da><div class="section-overlay" data-v-3a80a6da></div><div class="floating-elements" data-v-3a80a6da><!--[-->`);
      ssrRenderList(12, (i) => {
        _push(`<div class="floating-circle" style="${ssrRenderStyle({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${15 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.5}s`
        })}" data-v-3a80a6da></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 grid-pattern opacity-30" data-v-3a80a6da></div><div class="section-anchor relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-3a80a6da><div class="text-center mb-12 animate-fadeInUp" data-v-3a80a6da><div class="section-badge mx-auto" data-v-3a80a6da><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3a80a6da><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-3a80a6da></path></svg><span data-v-3a80a6da>My Work</span></div><h2 class="section-title" data-v-3a80a6da> Featured <span data-v-3a80a6da>Projects</span></h2><p class="section-subtitle mt-4" data-v-3a80a6da> A selection of my best work, showcasing my skills and creativity </p></div><div class="flex flex-wrap justify-center gap-3 mb-10 animate-fadeInUp delay-100" data-v-3a80a6da><!--[-->`);
      ssrRenderList(filters, (filter) => {
        _push(`<button class="${ssrRenderClass([activeFilter.value === filter ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" : "glass-light text-gray-300 hover:text-white hover:bg-white/20", "px-4 py-2 rounded-full transition-all duration-300 text-sm"])}" data-v-3a80a6da>${ssrInterpolate(filter)}</button>`);
      });
      _push(`<!--]--></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-3a80a6da><!--[-->`);
      ssrRenderList(filteredProjects.value, (project, index2) => {
        _push(`<div class="${ssrRenderClass([`delay-${index2 % 5 * 100}`, "group portfolio-card p-6 animate-fadeInUp cursor-pointer hover-lift"])}" data-v-3a80a6da><div class="relative h-48 rounded-xl overflow-hidden mb-4" data-v-3a80a6da><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-v-3a80a6da><div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-3a80a6da></div><div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-3a80a6da><span class="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg border border-white/30 text-sm" data-v-3a80a6da> View Details </span></div><span class="absolute top-3 right-3 px-2 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs rounded-full" data-v-3a80a6da>${ssrInterpolate(project.type)}</span></div><h3 class="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors" data-v-3a80a6da>${ssrInterpolate(project.title)}</h3><p class="text-gray-400 text-sm mb-4 line-clamp-2" data-v-3a80a6da>${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-4" data-v-3a80a6da><!--[-->`);
        ssrRenderList(project.tech.slice(0, 3), (tech) => {
          _push(`<span class="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded" data-v-3a80a6da>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]-->`);
        if (project.tech.length > 3) {
          _push(`<span class="px-2 py-1 text-xs text-gray-400" data-v-3a80a6da> +${ssrInterpolate(project.tech.length - 3)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex justify-between items-center" data-v-3a80a6da><a${ssrRenderAttr("href", project.demo)} target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm" data-v-3a80a6da> Live Demo <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3a80a6da><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-v-3a80a6da></path></svg></a><span class="text-xs text-gray-500" data-v-3a80a6da>${ssrInterpolate(project.year)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (selectedProject.value) {
          _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6" style="${ssrRenderStyle({ "background-color": "rgba(0, 0, 0, 0.8)", "backdrop-filter": "blur(8px)" })}" data-v-3a80a6da><div class="relative bg-slate-900/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl" data-v-3a80a6da><div class="sticky top-0 z-20 flex justify-between items-center p-4 md:p-6 bg-slate-900/95 backdrop-blur-xl border-b border-white/10" data-v-3a80a6da><h3 class="text-xl md:text-2xl font-bold text-white truncate pr-8" data-v-3a80a6da>${ssrInterpolate(selectedProject.value.title)}</h3><button class="text-gray-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full p-2 transition-colors absolute right-4 top-4" data-v-3a80a6da><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3a80a6da><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-3a80a6da></path></svg></button></div><div class="overflow-y-auto custom-scrollbar p-4 md:p-6 pt-2" data-v-3a80a6da><div class="relative h-48 md:h-64 w-full rounded-xl overflow-hidden mb-6" data-v-3a80a6da><img${ssrRenderAttr("src", selectedProject.value.image)}${ssrRenderAttr("alt", selectedProject.value.title)} class="w-full h-full object-cover" data-v-3a80a6da><div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" data-v-3a80a6da></div><div class="absolute bottom-4 left-4" data-v-3a80a6da><span class="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm rounded-full" data-v-3a80a6da>${ssrInterpolate(selectedProject.value.type)}</span></div></div><div class="mb-6" data-v-3a80a6da><h4 class="text-lg font-semibold text-white mb-2" data-v-3a80a6da>Overview</h4><p class="text-gray-300 leading-relaxed" data-v-3a80a6da>${ssrInterpolate(selectedProject.value.fullDescription || selectedProject.value.description)}</p></div>`);
          if (selectedProject.value.features) {
            _push2(`<div class="mb-6" data-v-3a80a6da><h4 class="text-lg font-semibold text-white mb-3" data-v-3a80a6da>Key Features</h4><ul class="space-y-2" data-v-3a80a6da><!--[-->`);
            ssrRenderList(selectedProject.value.features, (feature, index2) => {
              _push2(`<li class="flex items-start gap-3" data-v-3a80a6da><svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3a80a6da><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-3a80a6da></path></svg><span class="text-gray-300" data-v-3a80a6da>${ssrInterpolate(feature)}</span></li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="mb-8" data-v-3a80a6da><h4 class="text-lg font-semibold text-white mb-3" data-v-3a80a6da>Technologies Used</h4><div class="flex flex-wrap gap-2" data-v-3a80a6da><!--[-->`);
          ssrRenderList(selectedProject.value.tech, (tech) => {
            _push2(`<span class="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30" data-v-3a80a6da>${ssrInterpolate(tech)}</span>`);
          });
          _push2(`<!--]--></div></div><div class="flex flex-col sm:flex-row gap-3 sticky bottom-0 bg-slate-900/95 backdrop-blur-xl pt-4 -mx-2 px-2 pb-1 border-t border-white/10 mt-4" data-v-3a80a6da><a${ssrRenderAttr("href", selectedProject.value.demo)} target="_blank" class="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm md:text-base" data-v-3a80a6da><svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3a80a6da><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-v-3a80a6da></path></svg> Live Demo </a>`);
          if (selectedProject.value.github) {
            _push2(`<a${ssrRenderAttr("href", selectedProject.value.github)} target="_blank" class="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm md:text-base border border-slate-700" data-v-3a80a6da><svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" data-v-3a80a6da><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-3a80a6da></path></svg> View Source </a>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<button class="flex-1 px-4 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-[1.02] border border-slate-700 text-sm md:text-base" data-v-3a80a6da> Close </button></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-3a80a6da"]]), { __name: "Projects" });
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const floatingElements = ref(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${16 + i * 2}s linear infinite`,
          animationDelay: `${i * 0.4}s`
        }
      }))
    );
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "portfolio-section"
      }, _attrs))}><div class="section-overlay"></div><div class="floating-elements"><!--[-->`);
      ssrRenderList(floatingElements.value, (element) => {
        _push(`<div class="floating-circle" style="${ssrRenderStyle(element.style)}"></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 grid-pattern opacity-30"></div><div class="section-anchor relative z-10 w-full"><div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><div class="text-center mb-8 md:mb-12 animate-fadeInUp"><div class="section-badge mx-auto"><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>Get in Touch</span></div><h2 class="section-title"> Let&#39;s <span>Connect</span></h2><p class="section-subtitle mt-4"> Have a project in mind? Let&#39;s bring your ideas to life </p></div><div class="grid lg:grid-cols-5 gap-6 md:gap-8 animate-fadeInUp delay-100"><div class="lg:col-span-2 space-y-6"><div class="portfolio-card p-6"><h3 class="text-xl font-semibold text-white mb-6">Contact Information</h3><div class="space-y-4"><div class="group flex items-start gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300"><div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div class="min-w-0"><div class="text-sm text-gray-400">Email</div><div class="text-white font-medium break-all">timlozada5@gmail.com</div></div></div><div class="group flex items-start gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300"><div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><div class="text-sm text-gray-400">Location</div><div class="text-white font-medium">Metro Manila, Philippines</div></div></div><div class="group flex items-start gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300"><div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><div class="text-sm text-gray-400">Response Time</div><div class="text-white font-medium">Within 24 hours</div></div></div></div></div><div class="portfolio-card p-6"><h3 class="text-lg font-semibold text-white mb-4">Follow Me</h3><div class="flex gap-4"><a href="https://github.com/Teejay-d3v" target="_blank" rel="noopener noreferrer" class="flex-1 flex flex-col items-center gap-2 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"><svg class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span class="text-xs text-gray-400">GitHub</span></a><a href="https://www.linkedin.com/in/timothy-john-lozada-b7461b248/" target="_blank" rel="noopener noreferrer" class="flex-1 flex flex-col items-center gap-2 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"><svg class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg><span class="text-xs text-gray-400">LinkedIn</span></a></div></div></div><div class="lg:col-span-3"><div class="portfolio-card p-6 md:p-8"><h3 class="text-2xl font-semibold text-white mb-6">Send a Message</h3><form class="space-y-5"><div class="grid md:grid-cols-2 gap-5"><div><label class="block text-sm font-medium text-gray-300 mb-2">Your Name</label><input${ssrRenderAttr("value", form.value.name)} type="text" required class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all" placeholder="John Doe"></div><div><label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label><input${ssrRenderAttr("value", form.value.email)} type="email" required class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all" placeholder="john@example.com"></div></div><div><label class="block text-sm font-medium text-gray-300 mb-2">Subject</label><input${ssrRenderAttr("value", form.value.subject)} type="text" required class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all" placeholder="Project Inquiry"></div><div><label class="block text-sm font-medium text-gray-300 mb-2">Message</label><textarea rows="5" required class="w-full p-3.5 glass-light text-white rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none" placeholder="Tell me about your project...">${ssrInterpolate(form.value.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">`);
      if (isSubmitting.value) {
        _push(`<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>`);
      }
      _push(` ${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</button></form></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollProgress = ref(0);
    const showBackToTop = ref(false);
    const showScrollHint = ref(true);
    const isLoading = ref(true);
    ref("hero");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$5;
      const _component_About = _sfc_main$4;
      const _component_Skills = __nuxt_component_2;
      const _component_Projects = __nuxt_component_3;
      const _component_Contact = _sfc_main$1;
      _push(`<!--[--><div class="fixed inset-0 -z-10" data-v-3c0f82af><div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" data-v-3c0f82af></div><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-slate-900" data-v-3c0f82af></div></div><div class="relative z-0 min-h-screen overflow-x-hidden" data-v-3c0f82af><div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left transition-transform duration-150" style="${ssrRenderStyle({ transform: `scaleX(${scrollProgress.value})` })}" data-v-3c0f82af></div><main class="pt-16" data-v-3c0f82af>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_About, null, null, _parent));
      _push(ssrRenderComponent(_component_Skills, null, null, _parent));
      _push(ssrRenderComponent(_component_Projects, null, null, _parent));
      _push(ssrRenderComponent(_component_Contact, null, null, _parent));
      _push(`</main>`);
      if (showBackToTop.value) {
        _push(`<button class="fixed bottom-8 right-8 z-40 p-3 bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-700 hover:bg-slate-700/90 transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-cyan-500/20" aria-label="Back to top" title="Back to top" data-v-3c0f82af><svg class="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3c0f82af><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" data-v-3c0f82af></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (showScrollHint.value) {
        _push(`<div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30" data-v-3c0f82af><div class="flex flex-col items-center text-sm text-slate-400 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800" data-v-3c0f82af><span class="mb-1" data-v-3c0f82af>Scroll to explore</span><svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3c0f82af><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-v-3c0f82af></path></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900" data-v-3c0f82af><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500" data-v-3c0f82af></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c0f82af"]]);

export { index as default };
//# sourceMappingURL=index-BBHNiWmp.mjs.map
