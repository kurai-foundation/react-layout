import { DefaultProps } from "~/components/Typography/typography-types"
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import React from "react"

export default function GenericText(props: DefaultProps & { size: string, type: string, tag: string }) {
  const { t } = useTranslation()

  const {
    size,
    type,
    ellipsis,
    fitContent,
    minWidth,
    maxWidth,
    style,
    align,
    ...other
  } = props

  return React.createElement(props.tag, {
    ...other,
    className: classNames(`layout-typography-${ type }`, size, { ellipsis }, other.className),
    style: {
      width: props.width,
      minWidth: fitContent ? "fit-content" : (typeof minWidth === "boolean" ? props.width : minWidth),
      maxWidth: typeof maxWidth === "boolean" ? props.width : maxWidth,
      textAlign: align,
      ...style
    }
  }, typeof props.children === "string" ? t(props.children) : props.children)
}
