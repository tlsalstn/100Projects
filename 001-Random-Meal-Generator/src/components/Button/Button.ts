import styled from 'styled-components'

interface ButtonProps {
  background?: string
  bold?: boolean
  color?: string
  fontSize?: number | string
}

export const Button = styled.button<ButtonProps>`
  border: 0px;
  border-radius: 6px;
  padding: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ background }) => (background ? `background: ${background}` : '')};
  ${({ color }) => (color ? `color: ${color}` : '')};
  ${({ fontSize }) => (fontSize ? `font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize}` : '')};
`
