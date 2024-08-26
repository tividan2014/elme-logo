import { CodeIcon, ExportIcon, PhotoIcon } from 'common/icons'
import { useDispatch } from '../../../redux/hooks'
import Tab from 'common/components/tabs/Tabs'
import Button from 'common/components/button'
import { TabsProps } from 'antd'
import { exportContent } from 'features/image/store/imageSlice'
import { ExportAs } from 'features/image/store/types'

const Export = () => {
  const dispatch = useDispatch()

  const handleExportImage = async () => {
    dispatch(exportContent(ExportAs.image))
  }

  const handleExportHtml = async () => {
    dispatch(exportContent(ExportAs.html))
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Image',
      children: (
        <div className="flex justify-end">
          <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleExportImage} />
        </div>
      ),
      icon: <PhotoIcon isDefaultColor={false} size={5} />,
    },
    {
      key: '2',
      label: 'Html',
      children: (
        <div className="flex justify-end">
          <Button className="mt-2" label={'Export'} icon={<ExportIcon />} onClick={handleExportHtml} />
        </div>
      ),
      icon: <CodeIcon isDefaultColor={false} size={5} />,
    },
  ]

  return <Tab className="-mt-3" items={items} />
}

export default Export
