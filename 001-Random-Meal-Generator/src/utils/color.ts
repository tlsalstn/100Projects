export const getComplementaryColor = (rgb: string) => {
  const code = rgb.split('#')[1]
}

const convertAlphabetToNumber = (alphabet: string) => {
  const upperCaseAlphabet = alphabet.toUpperCase()

  switch (upperCaseAlphabet) {
    case 'A':
      return 10
    case 'B':
      return 11
    case 'C':
      return 12
    case 'D':
      return 13
    case 'E':
      return 14
    case 'F':
      return 15
    default:
      return Number(alphabet)
  }
}
