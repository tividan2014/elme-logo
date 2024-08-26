import Input from 'common/components/input'
import {
  ArrowsLeftRightIcon,
  ArrowsOutIcon,
  HorizontalIcon,
  RectangleHorizontalIcon,
  RectangleVerticalIcon,
  SquareIcon,
  VerticalIcon,
} from 'common/icons'
import { useDispatch, useSelector } from '../../../redux/hooks'
import { setImageHeigth, setImageSize, setImageWidth } from 'features/image/store/imageSlice'
import RadioGroup from 'common/components/radioGroup'
import Button from 'common/components/button'

enum Proportion {
  Square = '11',
  Rectangle32 = '32',
  Rectangle169 = '169',
  Full = 'full',
}

const Size = () => {
  const dispatch = useDispatch()

  const { width, height } = useSelector((state) => state.image)

  const isVertical = height > width

  const handleSwitchSize = () => {
    dispatch(setImageSize({ width: height, height: width }))
  }

  const handleSizeChange = (value: string) => {
    const minSize = Math.min(height, width)

    const resizeRectangle = (short: number, long: number) => {
      if (isVertical) {
        dispatch(setImageSize({ width: minSize, height: Math.round((minSize / short) * long) }))
      } else {
        dispatch(setImageSize({ width: Math.round((minSize / short) * long), height: minSize }))
      }
    }

    switch (value) {
      case Proportion.Full:
        dispatch(setImageSize({ width: window.innerWidth, height: window.innerHeight }))
        break
      case Proportion.Square:
        dispatch(setImageSize({ width: minSize, height: minSize }))
        break
      case Proportion.Rectangle32:
        resizeRectangle(2, 3)
        break
      case Proportion.Rectangle169:
        resizeRectangle(9, 16)
        break
    }
  }

  const options = [
    { label: <ArrowsOutIcon />, value: Proportion.Full },
    { label: <SquareIcon />, value: Proportion.Square },
    { label: isVertical ? <RectangleVerticalIcon /> : <RectangleHorizontalIcon />, value: Proportion.Rectangle32 },
    { label: isVertical ? <RectangleVerticalIcon /> : <RectangleHorizontalIcon />, value: Proportion.Rectangle169 },
  ]

  return (
    <>
      <div className="flex items-center">
        <Input
          value={width}
          placeholder="Horizontal"
          icon={<HorizontalIcon />}
          suffix="px"
          min={0}
          max={10000}
          onChange={(value) => dispatch(setImageWidth(value))}
        />
        <Button
          className="ml-2"
          icon={<ArrowsLeftRightIcon className="mx-2" />}
          type="text"
          onClick={handleSwitchSize}
        />
        <Input
          value={height}
          className="ml-2"
          placeholder="Vertical"
          icon={<VerticalIcon />}
          suffix="px"
          min={0}
          max={10000}
          onChange={(value) => dispatch(setImageHeigth(value))}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <RadioGroup items={options} initialValue={options[0].value} onChange={handleSizeChange} />
      </div>
    </>
  )
}

export default Size
