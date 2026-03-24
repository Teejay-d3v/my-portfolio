import { useSSRContext, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const activeSection = ref("hero");
    const navLinks = [
      { id: "hero", name: "Home" },
      { id: "about", name: "About" },
      { id: "skills", name: "Skills" },
      { id: "projects", name: "Projects" },
      { id: "contact", name: "Contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed inset-x-0 top-0 z-50 transition-all duration-300", isScrolled.value ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_10px_30px_rgba(2,6,23,0.45)]" : "bg-transparent"]
      }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-20 items-center justify-between gap-4"><a href="#hero" class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-white"><span class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span> TJLozada </a><div class="hidden items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/65 p-1 md:flex"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", `#${link.id}`)}${ssrRenderAttr("aria-current", activeSection.value === link.id ? "page" : void 0)} class="${ssrRenderClass([activeSection.value === link.id ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_8px_24px_rgba(14,165,233,0.35)]" : "text-slate-300 hover:text-white", "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"])}">${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></div><div class="hidden items-center gap-3 md:flex"><a href="/Timothy-John-Lozada-CV.pdf" target="_blank" rel="noopener noreferrer" class="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20 hover:text-white"> Resume </a></div><button class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 transition hover:border-cyan-400/40 hover:text-white md:hidden" aria-label="Toggle menu"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (isMobileMenuOpen.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      }
      _push(`</svg></button></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="mb-4 rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"><div class="space-y-2"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(`<a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass([activeSection.value === link.id ? "bg-cyan-500/20 text-cyan-200" : "text-slate-300 hover:bg-slate-800/70 hover:text-white", "block rounded-xl px-4 py-3 text-sm font-medium transition"])}">${ssrInterpolate(link.name)}</a>`);
        });
        _push(`<!--]--></div><a href="/Timothy-John-Lozada-CV.pdf" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20 hover:text-white"> Open Resume </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "Navbar" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-900" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C_3Bo8CQ.mjs.map
