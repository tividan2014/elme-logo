import cx from 'classnames'

import { CSSProperties } from 'react'

type Color = {
  r: number
  b: number
  g: number
  a: number
}

interface Props {
  className?: string
  type?: 'solid' | 'linear' | 'radial' | 'conic' | 'image'
  colors: Color[]
}

const ColorBox = ({ className, type, colors }: Props) => {
  const style: CSSProperties = {}

  switch (type) {
    case 'solid':
      if (colors.length === 0) return <></>

      const color = colors[0]
      style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
      break
  }

  return <span className={cx(className, 'w-5 h-5')} style={style}></span>
}

export default ColorBox
