import cx from 'classnames'

import { Tooltip as AntTooltip } from 'antd'
import { ReactNode } from 'react'

interface Props {
  className?: string
  label: string
  children: ReactNode
}

const Tooltip = ({ className, label, children }: Props) => {
  return (
    <AntTooltip className={cx(className, '')} title={label}>
      {children}
    </AntTooltip>
  )
}

export default Tooltip
