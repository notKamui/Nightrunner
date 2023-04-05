import type { NavigateToOptions } from 'nuxt/dist/app/composables/router'
import type { RouteLocationNamedRaw, RouteLocationPathRaw } from 'vue-router'

export default function useLocalizedNavigation() {
  const localeRoute = useLocaleRoute()

  return function localizedNavigateTo(path: string | RouteLocationPathRaw | RouteLocationNamedRaw, options?: NavigateToOptions) {
    const route = localeRoute(path)
    if (route)
      return navigateTo(route.fullPath, options)
  }
}
