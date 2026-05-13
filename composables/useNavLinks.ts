import { ref, type Ref } from 'vue'

/**
 * Navigation link type
 */
export interface NavLink {
  id: string
  name: string
}

/**
 * Composable for navigation links (reusable across components)
 */
export function useNavLinks(): Ref<NavLink[]> {
  return ref([
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ])
}
