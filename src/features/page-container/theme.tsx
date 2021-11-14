import { ThemeProvider } from "@emotion/react"
import type { FC } from "react"

const theme = {
  colors: {
    primary: "purple",
    disabled: "grey"
  }
}

type RootTheme = typeof theme

declare module "@emotion/react" {
  export interface Theme extends RootTheme {}
}

export const Theme: FC = (props) => <ThemeProvider theme={theme} {...props} />
