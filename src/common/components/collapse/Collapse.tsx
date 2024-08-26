import type { CollapseProps } from 'antd'
import { Collapse as AntCollapse } from 'antd'
import cx from 'classnames'

interface Props {
  className?: string
  items: CollapseProps['items']
  active?: number
  bordered?: boolean
  size?: 'small' | 'middle' | 'large'
  accordion?: boolean
}

const Collapse = ({ className, items, active, bordered = true, size, accordion }: Props) => {
  const onChange = (key: string | string[]) => {}

  return (
    <AntCollapse
      className={cx(className, '')}
      items={items}
      defaultActiveKey={[active?.toString() ?? '']}
      onChange={onChange}
      bordered={items?.length ? bordered : false}
      ghost={false}
      size={size}
      accordion={accordion}
    />
  )
}

export default Collapse
