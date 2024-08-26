import cx from 'classnames'

import { Button as AntButton } from 'antd'
import { ReactNode } from 'react'
import Tooltip from '../Tooltip'

interface Props {
  className?: string
  type?: 'default' | 'text'
  label?: string
  icon?: ReactNode
  onClick: () => void
}

const Button = ({ className, type = 'default', label, icon, onClick }: Props) => {
  return (
    <AntButton
      className={cx(className, 'group')}
      type={type}
      style={{ background: type === 'default' ? '#f4f4f5' : '' }}
      icon={icon}
      onClick={(event) => {
        event.preventDefault()
        onClick()
      }}
    >
      {label}
    </AntButton>
  )
}

export default Button
