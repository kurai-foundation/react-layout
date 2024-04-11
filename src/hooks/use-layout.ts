import { useContext } from "react"
import { LayoutContext } from "~/LayoutProvider"

export default function useLayout() {
  const context = useContext(LayoutContext)

  return {
    changeLocale(locale: string) {
      context.setLocale(locale)
    },

    get locale() {
      return context.locale
    },

    changeTheme(theme: string) {
      context.setTheme(theme)
    },

    get theme() {
      return context.theme
    }
  }
}
