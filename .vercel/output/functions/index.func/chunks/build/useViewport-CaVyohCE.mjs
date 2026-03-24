import { ref } from 'vue';

const useViewport = (breakpoint = 768) => {
  const isMobile = ref(false);
  return {
    isMobile
  };
};

export { useViewport as u };
//# sourceMappingURL=useViewport-CaVyohCE.mjs.map
