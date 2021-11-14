import { withTheme } from "./theme"

export const decorators = [withTheme]
export const parameters = {
  layout: "centered",
  backgrounds: {
    default: "twitter",
    values: [
      {
        name: "twitter",
        value: "#00aced"
      },
      {
        name: "facebook",
        value: "#3b5998"
      }
    ]
  }
}
