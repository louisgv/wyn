import type { FC } from "react"
import { Background } from "./background"
import { Theme } from "./theme"

export const PageContainer: FC = ({ children }) => {
  return (
    <Theme>
      <Background />
      {children}
    </Theme>
  )
}
