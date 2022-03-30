import React, { memo, useCallback } from "react"
import styled from "styled-components"
import MoodSelector, { MoodColor, moodColor, MoodSelectorLayout } from "./MoodSelector"

interface CalendarDateLayoutProps {
  mood?: keyof MoodColor
}

const CalendarDateLayout = styled.button<CalendarDateLayoutProps>`
  margin: 5px;
  padding: 5px;
  border: 0;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  align-items: center;
  background: ${(props) => (props.mood ? moodColor[props.mood] : "transparent")};
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  &:hover,
  &:focus {
    background: rgba(
      ${(props) =>
        props.mood
          ? moodColor[props.mood]
              .slice(1)
              .split(/[\w]{2}/)
              .filter((str) => str !== "")
              .join(", ")
          : "0, 0, 0"},
      0.2
    );
  }
  &:focus {
    & > ${MoodSelectorLayout} {
      display: block;
    }
  }
  &:disabled {
    background: transparent;
    cursor: default;
  }
`

interface Props {
  date: number
  mood?: keyof MoodColor
  onClickDate: (date: number) => void
  onClickMood: (mood: keyof MoodColor) => void
}

const CalendarDate = (props: Props) => {
  const { date, mood, onClickDate, onClickMood } = props

  const onClick = useCallback(() => {
    onClickDate(date)
  }, [onClickDate, date])

  return (
    <>
      {date === 0 ? (
        <CalendarDateLayout disabled></CalendarDateLayout>
      ) : (
        <CalendarDateLayout mood={mood} disabled={date === 0} onClick={onClick}>
          {date !== 0 ? date : ""}
          <MoodSelector onClickMood={onClickMood} />
        </CalendarDateLayout>
      )}
    </>
  )
}

export default memo(CalendarDate)
