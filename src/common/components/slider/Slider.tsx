import cx from 'classnames'

import { Slider as AntSlider } from 'antd'

interface Props {
  className?: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}

const Slider = ({ className, value, min, max, onChange }: Props) => {
  return (
    <AntSlider className={cx(className, '')} value={value} min={min} max={max} onChange={onChange} />

    // <div className={cx(className, 'flex items-center')}>
    //   <span>{placeholder}</span>
    //   <div className="w-full pl-4">
    //     <AntSlider className={cx(className, 'group')} value={value} onChange={onChange} />
    //   </div>
    // </div>
  )
}

export default Slider
