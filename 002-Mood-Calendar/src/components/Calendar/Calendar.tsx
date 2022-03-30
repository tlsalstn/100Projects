import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { convertDateToStr } from "../../utils/date"
import CalendarDate from "./CalendarDate"
import { MoodColor } from "./MoodSelector"

const CalendarWeek = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`

const CalendarLayout = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

interface Props {
  year: number
  month: number
  moods: Map<string, keyof MoodColor>
  onClickDate: (date: Date) => void
  onClickMood: (mood: keyof MoodColor) => void
}

const Calendar = (props: Props) => {
  const { year, month, moods, onClickDate, onClickMood } = props

  const [calendar, setCalendar] = useState<number[][]>([])

  useEffect(() => {
    const startDate = new Date()
    startDate.setFullYear(year, month, 1)
    startDate.setHours(0, 0, 0, 0)
    const endDate = new Date(startDate)
    endDate.setMonth(endDate.getMonth() + 1)
    endDate.setDate(0)

    const startDay = startDate.getDay()
    const lastDay = endDate.getDay()
    const week = Math.ceil((endDate.getDate() + startDate.getDay()) / 7)
    const c = []
    for (let i = 0; i < week; i++) {
      const date = []
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDay) || (i === week - 1 && lastDay < j)) {
          date.push(0)
        } else {
          date.push(i * 7 + j - (startDay - 1))
        }
      }
      c.push(date)
    }

    setCalendar(c)
  }, [year, month])

  const onClick = useCallback(
    (date: number) => {
      const d = new Date()
      d.setFullYear(year, month, date)
      onClickDate(d)
    },
    [onClickDate, year, month]
  )

  return (
    <CalendarLayout>
      {calendar.map((week, weekIdx) => {
        return (
          <CalendarWeek key={weekIdx}>
            {week.map((date, dateIdx) => {
              const d = new Date()
              d.setFullYear(year, month, date)
              d.setHours(0, 0, 0, 0)
              const mood = moods.get(convertDateToStr(d))
              return (
                <CalendarDate date={date} mood={mood} onClickDate={onClick} onClickMood={onClickMood} key={dateIdx} />
              )
            })}
          </CalendarWeek>
        )
      })}
    </CalendarLayout>
  )
}

export default Calendar
