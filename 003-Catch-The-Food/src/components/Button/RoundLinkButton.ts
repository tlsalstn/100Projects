import styled from "styled-components"
import LinkButton from "./LinkButton"
import { RoundButtonProps } from "./RoundButton"

const RoundLinkButton = styled(LinkButton)<RoundButtonProps>`
  ${({ borderRadius }) => `border-radius: ${borderRadius || "8px"}`}
`

export default RoundLinkButton
