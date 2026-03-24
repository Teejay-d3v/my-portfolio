import { onMounted, onUnmounted, ref } from 'vue'

export const useViewport = (breakpoint = 768) => {
  const isMobile = ref(false)

  const updateViewport = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateViewport)
  })

  return {
    isMobile,
  }
}