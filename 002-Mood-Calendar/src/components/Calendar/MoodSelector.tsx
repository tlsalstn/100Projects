import React from "react"
import styled from "styled-components"

export interface MoodColor {
  1: string
  2: string
  3: string
  4: string
  5: string
}

export const moodColor: MoodColor = {
  1: "#880000",
  2: "#884400",
  3: "#a6a600",
  4: "#338800",
  5: "#0022cc"
}

export const MoodSelectorLayout = styled.div`
  top: calc(100% + 10px);
  padding: 10px 15px;
  border-radius: 6px;
  background: #fff;
  display: none;
  position: absolute;
  &:active {
    display: block;
  }
`

const MoodSelectorContainer = styled.div`
  align-items: center;
  display: flex;
`

const MoodSelectorButton = styled.button`
  margin: 0 5px;
  padding: 5px;
  border-radius: 50px;
  border: 0;
  width: 30px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`

interface Props {
  onClickMood: (mood: keyof MoodColor) => void
}

const MoodSelector = (props: Props) => {
  const { onClickMood } = props

  return (
    <MoodSelectorLayout>
      <MoodSelectorContainer>
        {Object.keys(moodColor).map((mood, idx) => (
          <MoodSelectorButton onClick={() => onClickMood(Number(mood) as keyof MoodColor)} key={idx}>
            {mood}
          </MoodSelectorButton>
        ))}
      </MoodSelectorContainer>
    </MoodSelectorLayout>
  )
}

export default MoodSelector
