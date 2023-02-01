import { NavigationState } from '@react-navigation/routers'

// @ts-ignore
export function getActiveRouteName(state: NavigationState | undefined) {
  if (state) {
    const route = state.routes[state.index]
    if (route.state) {
      // Dive into nested navigators
      // @ts-ignore
      return getActiveRouteName(route.state)
    }
    return route.name
  }
}

// export const screenTracking = (state: NavigationState | undefined) => {
//   const currentRouteName = getActiveRouteName(state)
// }
