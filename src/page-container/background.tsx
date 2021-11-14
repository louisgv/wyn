import styled from "@emotion/native"
import { Appearance } from "react-native"

export const Background = styled.View`
  background-color: ${Appearance.getColorScheme() === "dark" ? "#000" : "#fff"};
`
