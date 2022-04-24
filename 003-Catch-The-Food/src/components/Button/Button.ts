import styled from "styled-components"
import { Property } from "csstype"

export interface ButtonProps {
  margin?: Property.Margin
  border?: Property.Border
  padding?: Property.Padding
  width?: Property.Width
  height?: Property.Height
  background?: Property.Background
}

const Button = styled.button<ButtonProps>`
  ${({ margin }) => `margin: ${margin || "0px"};`}
  ${({ border }) => `border: ${border || "0px"};`}
  ${({ padding }) => `padding: ${padding || "0px"};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ background }) => background && `background: ${background};`}
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`

export default Button
