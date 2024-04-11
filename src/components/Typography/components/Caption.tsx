import { DefaultProps } from "~/components/Typography/typography-types"
import GenericText from "./_GenericText"

function SmallCaption(props: DefaultProps) {
  return <GenericText tag="span" type="caption" size="small" { ...props }>{ props.children }</GenericText>
}

function LargeCaption(props: DefaultProps) {
  return <GenericText tag="span" type="caption" size="large" { ...props }>{ props.children }</GenericText>
}

export function Caption(props: DefaultProps) {
  return <GenericText tag="span" type="caption" size="medium" { ...props }>{ props.children }</GenericText>
}

Caption.Small = SmallCaption
Caption.Large = LargeCaption
