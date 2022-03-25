import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LinkButtonProps {
  background?: string
  bold?: boolean
  color?: string
  fontSize?: number | string
  hover?: boolean
}

export const LinkButton = styled(Link)<LinkButtonProps>`
  border: 0px;
  border-radius: 6px;
  padding: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  ${({ background }) => (background ? `background: ${background}` : '')};
  ${({ bold }) => (bold ? `font-weight: 700` : '')};
  ${({ color }) => (color ? `color: ${color}` : '')};
  ${({ fontSize }) => (fontSize ? `font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize}` : '')};
  ${({ hover }) =>
    hover
      ? `&:hover {
    &::after {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
    }
  }`
      : ''}
`
