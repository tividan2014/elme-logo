import cx from 'classnames'

import { Radio, RadioChangeEvent } from 'antd'
import { ReactNode, useState } from 'react'

type Item = { label: ReactNode; value: string }

interface Props {
  className?: string
  items: Item[]
  initialValue?: string
  onChange: (value: string) => void
}

const RadioGroup = ({ className, items, initialValue, onChange }: Props) => {
  const [value3, setValue] = useState(initialValue ?? '')

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value)
    onChange(value)
  }
  return (
    <Radio.Group
      className={cx(className, 'group')}
      options={items}
      onChange={onChange3}
      value={value3}
      optionType="button"
      // size="small"
      //  buttonStyle="solid"
    >
      sdf
    </Radio.Group>
  )
}

export default RadioGroup
