import { Link } from "react-router-dom"
import styled from "styled-components"
import { ButtonProps } from "./Button"
import { Property } from "csstype"

interface LinkButtonProps extends Omit<ButtonProps, "margin"> {
  color?: Property.Color
}

const LinkButton = styled(Link)<LinkButtonProps>`
  ${({ border }) => `border: ${border || "0px"};`}
  ${({ padding }) => `padding: ${padding || "0px"};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ background }) => background && `background: ${background};`}
  ${({ color }) => `color: ${color || "#000"};`}
  cursor: pointer;
  text-decoration: none;
  &:disabled {
    cursor: not-allowed;
  }
`

export default LinkButton
