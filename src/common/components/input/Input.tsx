import cx from 'classnames'

import { Input as AntInput } from 'antd'
import { ChangeEvent, WheelEvent, ReactNode, useState } from 'react'
import { wheelStepSize } from 'common/constants'

interface Props {
  className?: string
  value: number
  placeholder: string
  icon?: ReactNode
  suffix?: string
  min?: number
  max?: number
  onChange: (value: number) => void
}

const Input = ({ className, value, placeholder, icon, suffix, min, max, onChange }: Props) => {
  const handleOnWheel = (e: WheelEvent<HTMLInputElement>) => {
    const diectionSign = Math.sign(e.deltaY)
    const currentValue = value - diectionSign * wheelStepSize

    if (currentValue < min! || currentValue > max!) return

    onChange(currentValue)
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>): void {
    if (isNaN(Number(e.target.value))) return

    const currentValue = Number(e.target.value)
    if (currentValue < min! || currentValue > max!) return

    onChange(currentValue)
  }

  return (
    <AntInput
      className={cx(className, 'group')}
      placeholder={placeholder}
      prefix={icon}
      suffix={suffix}
      value={value}
      onChange={handleOnChange}
      onWheel={handleOnWheel}
    />
  )
}

export default Input
