import { ThemeProvider } from "@emotion/react"
import type { FC } from "react"
import React from "react"

const theme = {
  colors: {
    primary: "purple",
    disabled: "grey"
  }
}

const Theme: FC = (props) => <ThemeProvider theme={theme} {...props} />

export const withTheme = (Story) => <Theme>{Story()}</Theme>
