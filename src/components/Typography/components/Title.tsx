import { DefaultProps } from "~/components/Typography/typography-types"
import GenericText from "~/components/Typography/components/_GenericText"

function SmallTitle(props: DefaultProps) {
  return <GenericText tag="h3" type="title" size="small" { ...props }>{ props.children }</GenericText>
}

function LargeTitle(props: DefaultProps) {
  return <GenericText tag="h1" type="title" size="large" { ...props }>{ props.children }</GenericText>
}

export function Title(props: DefaultProps) {
  return <GenericText tag="h2" type="title" size="medium" { ...props }>{ props.children }</GenericText>
}

Title.Small = SmallTitle
Title.Large = LargeTitle
