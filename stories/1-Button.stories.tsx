import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react-native"
import { ButtonContainer } from "@wyn/interactive/button"
import { Text } from "moti"
import React from "react"

export default {
  title: "Button",
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"]
    }
  }
}

export const text = () => (
  <ButtonContainer onPress={action("Hello")}>
    <Text>Hello world</Text>
  </ButtonContainer>
)

// On-Device Register
storiesOf("Button", module).add("Text", text)
