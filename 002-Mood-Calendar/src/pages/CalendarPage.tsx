import React, { useCallback, useState } from "react"
import styled from "styled-components"
import Calendar from "../components/Calendar/Calendar"
import { MoodColor } from "../components/Calendar/MoodSelector"
import { convertDateToStr } from "../utils/date"

const CalendarPageLayout = styled.div`
  width: 100%;
  height: 100%;
  background: #353535;
  display: flex;
  flex-direction: column;
`

const CalendarHeader = styled.div`
  padding: 0 40px;
  width: 100%;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const CalendarBtn = styled.button`
  border: 0;
  border-radius: 50px;
  padding: 10px;
  background: transparent;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`

const CalendarCurrentYearMonth = styled.span`
  color: #b5b5b5;
  font-size: 32px;
  font-weight: bold;
`

const CalendarBody = styled.div`
  flex-grow: 1;
`

const date = new Date()
date.setFullYear(date.getFullYear(), date.getMonth(), 1)

function CalendarPage() {
  const [year, setYear] = useState<number>(date.getFullYear())
  const [month, setMonth] = useState<number>(date.getMonth())
  const [selectedDate, setSelectedDate] = useState<string>()
  const [moods, setMoods] = useState<Map<string, keyof MoodColor>>(new Map())

  const onClickPrev = () => {
    const d = new Date()
    d.setFullYear(year, month - 1, 1)

    setYear(d.getFullYear())
    setMonth(d.getMonth())
  }

  const onClickNext = () => {
    const d = new Date()
    d.setFullYear(year, month + 1, 1)

    setYear(d.getFullYear())
    setMonth(d.getMonth())
  }

  const onClickDate = useCallback((date: Date) => {
    setSelectedDate(convertDateToStr(date))
  }, [])

  const onClickMood = useCallback(
    (mood: keyof MoodColor) => {
      if (!selectedDate) return

      setMoods((prev) => {
        const map = new Map([...prev, [selectedDate, mood]])
        return map
      })
    },
    [selectedDate]
  )

  return (
    <CalendarPageLayout>
      <CalendarHeader>
        <CalendarBtn onClick={onClickPrev}>
          <img src={"icons/back.png"} alt={"prev month"} />
        </CalendarBtn>
        <CalendarCurrentYearMonth>
          {year}년 {month + 1}월
        </CalendarCurrentYearMonth>
        <CalendarBtn onClick={onClickNext}>
          <img src={"icons/forward.png"} alt={"next month"} />
        </CalendarBtn>
      </CalendarHeader>
      <CalendarBody>
        <Calendar year={year} month={month} moods={moods} onClickDate={onClickDate} onClickMood={onClickMood} />
      </CalendarBody>
    </CalendarPageLayout>
  )
}

export default CalendarPage
