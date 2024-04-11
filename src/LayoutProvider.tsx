import { createContext, useEffect, useState } from "react"
import firstUpper from "~/utils/first-upper"
import { valueTypesMapping } from "~/utils/value-types-mapping"
import { i18n } from "i18next"


type TTextProperties = {
  textSize: number
  opacity: number
  fontWeight: number
}

type TSizedComponent<Properties> = {
  medium: Properties
  small: Properties
  large: Properties
}

interface Props {
  children: any

  i18n?: i18n

  layout: {
    typography: {
      text: TSizedComponent<TTextProperties>
      caption: TSizedComponent<TTextProperties>
      title: TSizedComponent<TTextProperties>
    }
  }

  defaultTheme?: string

  themes?: {
    [key: string]: {
      variables: {
        [key: string]: string
      }
    }
  }
}

interface LayoutContextType {
  theme: string
  setTheme: (theme: string) => void

  locale: string
  setLocale: (locale: string) => void
}

export const LayoutContext = createContext<LayoutContextType>({
  theme: "dark",
  setTheme: () => {
    // empty
  },

  locale: "en",
  setLocale: () => {
    // empty
  }
})

export default function LayoutProvider(props: Props) {
  const [theme, setTheme] = useState("dark")
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    // Setup layout variables

    Object.entries(props.layout).forEach(([nsKey, value]) => {
      Object.entries(value).map(([componentKey, value]) => {
        Object.entries(value).map(([sizeKey, properties]) => {
          Object.entries(properties).forEach(([propertyKey, value]) => {
            document.documentElement.style.setProperty(
              `--kLayout${ firstUpper(nsKey) }${ firstUpper(componentKey) }${ firstUpper(sizeKey) }${ firstUpper(propertyKey) }`,
              value + (valueTypesMapping[propertyKey] ?? "")
            )
          })
        })
      })
    })
  }, [props.layout])

  useEffect(() => {
    if (
      !props.themes
      || (
        (!props.defaultTheme || !(props.defaultTheme in props.themes))
        && !(theme in props.themes)
      )
    ) return

    const themeData = props.themes[theme ?? props.defaultTheme]

    Object.entries(themeData.variables).forEach(([variableKey, value]) => {
      document.documentElement.style.setProperty(`--${ variableKey }`, value)
    })
  }, [props.themes, theme, props.defaultTheme])

  // Restore variables
  useEffect(() => {
    const savedLocale = localStorage.getItem("layout-locale")
    const savedTheme = localStorage.getItem("layout-theme")

    if (savedLocale) {
      setLocale(savedLocale)

      if (props.i18n) props.i18n.changeLanguage(savedLocale)
    }
    if (savedTheme) setTheme(savedTheme)
  }, [])

  return (
    <LayoutContext.Provider value={ {
      theme,
      setTheme: (theme: string) => {
        if (!props.themes) {
          console.warn("Found attempt to change theme, but themes not provided")
          return
        }

        if (!Object.keys(props.themes).includes(theme) && theme !== "default") {
          console.warn(`Theme ${ theme } not found in provided themes`)
          return
        }

        localStorage.setItem("layout-theme", theme)

        setTheme(theme)
      },
      locale,
      setLocale: (locale: string) => {
        if (props.i18n) props.i18n.changeLanguage(locale)

        localStorage.setItem("layout-locale", locale)

        setLocale(locale)
      }
    } }>
      { props.children }
    </LayoutContext.Provider>
  )
}
