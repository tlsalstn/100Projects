import { convertDateToStr } from "./date"

describe("convertDateToStr", () => {
  test("Expect to be 2022-01-01", () => {
    const date = new Date()
    date.setFullYear(2022, 0, 1)
    expect(convertDateToStr(date)).toBe("2022-01-01")
  })

  test("Expect to be 2022-10-01", () => {
    const date = new Date()
    date.setFullYear(2022, 9, 1)
    expect(convertDateToStr(date)).toBe("2022-10-01")
  })

  test("Expect to be 2022-01-10", () => {
    const date = new Date()
    date.setFullYear(2022, 0, 10)
    expect(convertDateToStr(date)).toBe("2022-01-10")
  })

  test("Expect to be 2022-10-10", () => {
    const date = new Date()
    date.setFullYear(2022, 9, 10)
    expect(convertDateToStr(date)).toBe("2022-10-10")
  })
})
