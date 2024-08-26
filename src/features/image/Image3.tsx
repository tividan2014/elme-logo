import React, { useRef, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import { exportContent, setImageSize } from './store/imageSlice'
import { minWheelSize, whellScaleFactor } from 'common/constants'
import html2canvas from 'html2canvas'
import { ExportAs } from './store/types'
import elmeLink5 from '../../assets/images/elme_link5.jpg'

const Image3: React.FC = () => {
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
        ref={divRef}
        style={{
          width: `${width}px`,
          height: `${width}px`,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            // border: '1px solid blue',
            width: '100%',
            height: '100%',
            display: 'flex',
            //justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'JumperBoldItalic',
              fontSize: `${width / 5}px`,
              color: 'red',
              textAlign: 'center',
              //
              paddingTop: `${width / 21.0}px`,
              marginLeft: `${width / 20}px`,
            }}
          >
            ELME
          </div>

          <div
            style={{
              //  backgroundColor: 'rgb(52,47,126)',
              fontFamily: 'JumperBoldItalic',
              fontSize: `${width / 5}px`,

              width: `${width / 3.5}px`,
              height: `${width / 5.2}px`,
              transform: 'skew(-9deg)',
              borderRadius: '11%', ////////////////
              marginLeft: `${width / 41}px`,
              //
              //  border: '1px solid pink',
            }}
          >
            <div
              style={{
                border: '1px solid red',
                width: '100%',
                transform: 'skew(9deg)',
                color: 'green',
                marginTop: `-${width / 31}px`,
                marginLeft: `${width / 55}px`,
                ////
                display: 'flex',
              }}
            >
              <div
                style={{
                  border: '1px solid red',
                }}
              >
                E
              </div>
              <div style={{ transform: 'scaleX(-1) skew(18deg)' }}>E</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image3
