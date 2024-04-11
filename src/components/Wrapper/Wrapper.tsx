import React, { CSSProperties } from "react"
import classNames from "classnames"
import "./Wrapper.scss"

export enum WrapperVariant {
  FlexRowLeftTop = "FRowLeftTop",
  FlexRowRightTop = "FRowRightTop",
  FlexRowCenterTop = "FRowCenterTop",

  FlexRowSpaceBetweenTop = "FRowSpaceBetweenTop",
  FlexRowSpaceBetweenCenter = "FRowSpaceBetweenCenter",
  FlexRowSpaceBetweenBottom = "FRowSpaceBetweenBottom",

  FlexRowLeftCenter = "FRowLeftCenter",
  FlexRowRightCenter = "FRowRightCenter",
  FlexRowCenter = "FRowCenter",

  FlexRowLeftBottom = "FRowLeftBottom",
  FlexRowRightBottom = "FRowRightBottom",
  FlexRowCenterBottom = "FRowCenterBottom",

  FlexColumnLeftTop = "FColumnLeftTop",
  FlexColumnRightTop = "FColumnRightTop",
  FlexColumnCenterTop = "FColumnCenterTop",

  FlexColumnLeftCenter = "FColumnLeftCenter",
  FlexColumnRightCenter = "FColumnRightCenter",
  FlexColumnCenter = "FColumnCenter",

  FlexColumnLeftSpaceBetween = "FColumnLeftSpaceBetween",
  FlexColumnRightSpaceBetween = "FColumnRightSpaceBetween",
  FlexColumnCenterSpaceBetween = "FColumnCenterSpaceBetween",

  FlexColumnLeftBottom = "FColumnLeftBottom",
  FlexColumnRightBottom = "FColumnRightBottom",
  FlexColumnCenterBottom = "FColumnCenterBottom",

  GridCenter = "GCenter"
}

export interface WrapperProps {
  children: any

  variant?: WrapperVariant

  className?: string
  style?: CSSProperties
  gap?: number
  overflow?: boolean
  fullWidth?: boolean
  fullHeight?: boolean

  width?: number | string
  minWidth?: number | string | boolean
  maxWidth?: number | string | boolean
  fitContent?: boolean
  wrap?: boolean

  // Events
  onClick?(event: React.MouseEvent<HTMLDivElement>): void

  onMouseDown?(event: React.MouseEvent<HTMLDivElement>): void

  onMouseUp?(event: React.MouseEvent<HTMLDivElement>): void
}

export default function Wrapper(props: WrapperProps) {
  return (
    <div
      className={ classNames(
        "layout-wrapper",
        props.variant ?? WrapperVariant.FlexRowLeftTop,
        props.className
      ) }

      style={ {
        overflow: props.overflow ? "visible" : undefined,
        gap: props.gap ?? 10,
        height: props.fullHeight ? "100%" : undefined,
        width: props.width ? props.width : (props.fullWidth ? "100%" : undefined),
        minWidth: props.fitContent ? "fit-content" : (typeof props.minWidth === "boolean" ? props.width : props.minWidth),
        maxWidth: typeof props.maxWidth === "boolean" ? props.width : props.maxWidth,
        flexWrap: props.wrap ? "wrap" : undefined,
        ...props.style
      } }

      onClick={ props.onClick }
      onMouseDown={ props.onMouseDown }
      onMouseUp={ props.onMouseUp }
    >
      { props.children }
    </div>
  )
}
