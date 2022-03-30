export const convertDateToStr = (d: Date): string => {
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()

  return `${year}-${month < 10 ? "0" : ""}${month}-${date < 10 ? "0" : ""}${date}`
}
