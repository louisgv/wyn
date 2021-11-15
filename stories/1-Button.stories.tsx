import type { Meta, Story } from "@storybook/react-native"
import { ButtonText } from "@wyn/interactive/button"
import React from "react"

export default {
  title: "Button",
  component: ButtonText
} as Meta

export const ButtonTest: Story = (args) => <ButtonText {...args} />
