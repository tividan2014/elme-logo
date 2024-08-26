import cx from 'classnames'

import { ColorPicker as AntColorPicker } from 'antd'
import { Color } from 'features/image/store/types'
import { AggregationColor } from 'antd/es/color-picker/color'
import { ColorValueType } from 'antd/es/color-picker/interface'

interface Props {
  className?: string
  colors?: Color[]
  placeholder?: string
  onChange: (values: Color[]) => void
}

const MultiColorPicker = ({ className, colors, onChange }: Props) => {
  const values = colors?.map((color) => {
    return { color: `rgba(${color.r},${color.g},${color.b},${color.a})`, percent: color.p }
  }) as ColorValueType

  const handleChange = (value: any) => {
    const vv: Color[] = value.colors.map((v: any) => {
      const rgb = v.color.toRgb()
      return { ...rgb, p: v.percent }
    })

    onChange(vv)
  }

  return (
    <AntColorPicker
      className={cx(className, 'flex items-center')}
      value={values}
      mode={['gradient']}
      showText
      disabledAlpha={false}
      trigger="hover"
      onChange={handleChange}
    />
  )
}

export default MultiColorPicker
