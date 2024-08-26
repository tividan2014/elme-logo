export enum ExportAs {
  image,
  html,
}

export type Color = {
  r: number
  g: number
  b: number
  a: number
  p?: number
}

export enum BackgroundType {
  solid = 'Solid',
  linear = 'Linear',
  radial = 'Radial',
  conic = 'Conic',
  image = 'Image',
}

interface BackgroundBase {
  isVisible: boolean
  type: BackgroundType
}

export interface SolidBackground extends BackgroundBase {
  color: Color
}

export interface LinearBackground extends BackgroundBase {
  turn: number
  colors: Color[]
}

export type Background = SolidBackground | LinearBackground
