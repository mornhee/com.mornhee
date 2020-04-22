import styled from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    radius: number
    color: {
      content: string
      background: string
      primary: string
      secondary: string
    }
  }
}