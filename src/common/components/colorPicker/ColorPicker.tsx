import cx from 'classnames'

import { ColorPicker as AntColorPicker } from 'antd'
import { Color } from 'features/image/store/types'
import { AggregationColor } from 'antd/es/color-picker/color'

interface Props {
  className?: string
  color: Color
  placeholder?: string
  onChange: (value: Color) => void
}

const ColorPicker = ({ className, color, onChange }: Props) => {
  const value = `rgba(${color.r},${color.g},${color.b},${color.a})`

  function handleChange(value: AggregationColor): void {
    const rgb = value.toRgb()
    const color: Color = { ...rgb }

    onChange(color)
  }

  return (
    <AntColorPicker
      className={cx(className, 'flex items-center')}
      value={value}
      showText
      disabledAlpha={false}
      trigger="hover"
      onChange={handleChange}
    />
  )
}

export default ColorPicker
