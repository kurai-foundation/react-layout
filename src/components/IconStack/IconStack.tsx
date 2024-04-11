import "./IconStack.scss"
import { CSSProperties } from "react"
import Icon, { IconSize } from "~/components/Icon"
import classNames from "classnames"

interface Props {
  icons: (string | JSX.Element)[]

  size: IconSize

  className?: string

  style?: CSSProperties

  increaseGapBy?: number

  onClick?(): void
}

export default function IconStack(props: Props) {
  if (props.icons.length < 1) return null

  return (
    <div
      className={ classNames("icon-stack", props.className) }
      onClick={ props.onClick }
      style={ {
        "--iconSize": props.size - (props.increaseGapBy ?? 0) + "px",
        ...props.style
      } as any }
    >
      { [...props.icons].reverse().map((icon, index) => (
        <Icon size={ props.size } icon={ icon } key={ index } />
      )) }
    </div>
  )
}
