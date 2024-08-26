import React, { useRef, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { exportContent, setImageSize } from './store/imageSlice'
import { minWheelSize, whellScaleFactor } from 'common/constants'
import html2canvas from 'html2canvas'
import { ExportAs } from './store/types'
import elmeLink5 from '../../assets/images/elme_link5.jpg'

const Image: React.FC = () => {
  const dispatch = useDispatch()

  const { width, exporting } = useSelector((state) => state.image)

  const divRef = useRef<HTMLDivElement>(null)

  const createDonwloadLink = (href: string, extension: string) => {
    const link = document.createElement('a')
    link.href = href
    link.download = `background.${extension}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleExportImage = useCallback(async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current)
      const imgData = canvas.toDataURL('image/png')
      createDonwloadLink(imgData, 'png')
    }
  }, [])

  const handleExportHtml = useCallback(async () => {
    if (divRef.current) {
      const blob = new Blob([divRef.current!.outerHTML], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      createDonwloadLink(url, '.html')
      URL.revokeObjectURL(url)
    }
  }, [])

  useEffect(() => {
    switch (exporting) {
      case ExportAs.image:
        handleExportImage()
        break
      case ExportAs.html:
        handleExportHtml()
        break
    }

    if (exporting) {
      dispatch(exportContent(null))
    }
  }, [dispatch, exporting, handleExportHtml, handleExportImage])

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault()
      const newWidth = Math.max(minWheelSize, width + event.deltaY * whellScaleFactor)
      const newHeight = Math.max(minWheelSize, width + event.deltaY * whellScaleFactor)
      dispatch(setImageSize({ width: newWidth, height: newHeight }))
    },
    [dispatch, width]
  )

  useEffect(() => {
    const divElement = divRef.current

    if (divElement) {
      divElement.addEventListener('wheel', handleWheel)
    }
    return () => {
      if (divElement) {
        divElement.removeEventListener('wheel', handleWheel)
      }
    }
  }, [width, handleWheel])

  return (
    <div
      className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundImage: `url(${elmeLink5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="duration-500"
        ref={divRef}
        style={{
          width: `${width}px`,
          height: `${width}px`,
          position: 'relative',
          fontSize: '200px',
        }}
      >
        <div
          style={{
            position: 'relative',
            border: '1px solid blue',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              border: '1px solid blue',
              //width: '50%',
              //height: '50%',
              fontFamily: 'JumperBoldItalic',
              fontSize: '1em',
              color: 'red',
              textAlign: 'center',
            }}
          >
            ELME
          </div>
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'rgb(252,47,126)',
              top: '40.2%',
              left: '60.68%',
              fontFamily: 'JumperBoldItalic',
              color: 'blue',
              height: '19.5%',
              width: '28.8%',
              transform: 'skew(-9deg)',
              borderRadius: '11%',
            }}
          >
            <div
              className="border-1 border-blue-500 "
              style={{
                position: 'relative',
                transform: 'skew(9deg)',
                top: '-10%',
                left: '10%',
                fontFamily: 'JumperBoldItalic',
                fontSize: '200px',
                color: 'white',
                width: '90px',
                height: '100%',
              }}
            >
              E
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
