import "./Icon.scss"
import { CSSProperties, JSX } from "react"
import classNames from "classnames"
import IconStack from "~/components/IconStack"
import resolveUrl from "~/utils/resolve-url"

export enum IconSize {
  x12 = 12,
  x14 = 14,
  x16 = 16,
  x18 = 18,
  x20 = 20,
  x24 = 24,
  x32 = 32,
  x36 = 36,
  x48 = 48,
  x44 = 44,
  x64 = 64,
  x56 = 56,
  x128 = 128,
}

interface Props {
  size: IconSize | number
  icon: (string | JSX.Element) | (string | JSX.Element)[]

  alt?: string

  style?: CSSProperties
  className?: string

  onClick?(): void
}

export default function Icon(props: Props) {
  if (Array.isArray(props.icon) && props.icon.length > 1) return (
    <IconStack { ...props } icons={ props.icon } />
  )

  return (
    <div
      className={ classNames("icon", props.className) }
      style={ { width: props.size, height: props.size, minWidth: props.size, ...props.style } }
      onClick={ props.onClick }
    >
      { (typeof props.icon === "string" || (Array.isArray(props.icon) && typeof props.icon[0] === "string")) ? (
        <img src={ resolveUrl(Array.isArray(props.icon) ? props.icon[0] : props.icon) } alt={ props.alt ?? "" } />
      ) : (
        props.icon
      ) }
    </div>
  )
}
