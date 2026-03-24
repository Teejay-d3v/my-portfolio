import { ref } from 'vue'

export const usePortfolio = () => {
  // Consistent animation delays
  const getDelayClass = (index) => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']
    return delays[index % delays.length]
  }

  // Floating elements configuration
  const floatingElements = ref(Array.from({ length: 12 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${15 + i * 2}s linear infinite`,
      animationDelay: `${i * 0.5}s`
    }
  })))

  // Shared section styles
  const sectionClasses = 'min-h-screen relative flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden'
  
  // Shared gradient colors
  const gradients = {
    primary: 'from-blue-500 to-cyan-500',
    secondary: 'from-yellow-400 to-orange-400',
    accent: 'from-purple-500 to-pink-500',
    dark: 'from-slate-900 via-slate-800 to-slate-900'
  }

  return {
    getDelayClass,
    floatingElements,
    sectionClasses,
    gradients
  }
}