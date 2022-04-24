import styled from "styled-components"
import { Property } from "csstype"

interface TypographyProps {
  margin?: Property.Margin
  color?: Property.Color
  fontSize?: Property.FontSize
  fontWeight?: Property.FontWeight
  letterSpacing?: Property.LetterSpacing
}

const Typography = styled.p<TypographyProps>`
  ${({ margin }) => `margin: ${margin || "0px"};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => `font-size: ${fontSize || "16px"};`}
  ${({ fontWeight }) => `font-weight: ${fontWeight || "700"};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing};`}
`

export default Typography
