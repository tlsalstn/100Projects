import styled from "styled-components"
import Button from "./Button"
import { Property } from "csstype"

export interface RoundButtonProps {
  borderRadius?: Property.BorderRadius
}

const RoundButton = styled(Button)<RoundButtonProps>`
  ${({ borderRadius }) => `border-radius: ${borderRadius || "8px"}`}
`

export default RoundButton
