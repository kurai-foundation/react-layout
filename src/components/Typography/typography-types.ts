import { CSSProperties } from "react"

export interface DefaultProps {
  children: any
  className?: string

  ellipsis?: boolean
  width?: number | string
  minWidth?: number | string | boolean
  maxWidth?: number | string | boolean

  align?: "left" | "center" | "right"

  fitContent?: boolean

  style?: CSSProperties

  onClick?(): void
}
