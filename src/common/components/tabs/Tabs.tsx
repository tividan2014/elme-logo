import cx from 'classnames'

import { TabsProps, Tabs as AntTabs } from 'antd'

interface Props {
  className?: string
  items: TabsProps['items']
  activeItem?: string
  isVertical?: boolean
}

const Tabs = ({ className, activeItem, items, isVertical }: Props) => {
  const handleChange = (key: string) => {}

  return (
    <AntTabs
      className={cx(className, '')}
      defaultActiveKey={activeItem}
      items={items}
      onChange={handleChange}
      tabPosition={isVertical ? 'left' : 'top'}
    />
  )
}

export default Tabs
