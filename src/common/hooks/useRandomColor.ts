import { Color } from 'features/image/store/types'

const getRandom = (maxValue: number) => {
  return Math.floor(Math.random() * maxValue)
}

const useRandomColor = (ignoreAlpha: boolean = true): Color => {
  const color: Color = {
    r: getRandom(255),
    g: getRandom(255),
    b: getRandom(255),
    a: ignoreAlpha ? 1 : getRandom(100),
  }

  return color
}

export default useRandomColor
