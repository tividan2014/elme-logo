import cx from 'classnames'
import Collapse from '../collapse/Collapse'
import Input from '../input/Input'
import { HorizontalIcon, VerticalIcon } from 'common/icons'

interface VisibilityProps {
  className?: string
}

const Widget = ({ className }: VisibilityProps) => {
  return (
    <div
      className={cx(
        className,
        'group overflow-y-auto whitespace-pre-line rounded-lg border-1 border-gray-300 bg-white p-4 shadow-md shadow-gray-300'
      )}
    ></div>
  )
}

export default Widget
