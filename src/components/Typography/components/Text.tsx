import { DefaultProps } from "~/components/Typography/typography-types"
import GenericText from "~/components/Typography/components/_GenericText"

function SmallText(props: DefaultProps) {
  return <GenericText tag="span" type="text" size="small" { ...props }>{ props.children }</GenericText>
}

function LargeText(props: DefaultProps) {
  return <GenericText tag="span" type="text" size="large" { ...props }>{ props.children }</GenericText>
}

export function Text(props: DefaultProps) {
  return <GenericText tag="span" type="text" size="medium" { ...props }>{ props.children }</GenericText>
}

Text.Small = SmallText
Text.Large = LargeText
