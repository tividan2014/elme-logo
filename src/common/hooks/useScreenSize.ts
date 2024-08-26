import { useState, useEffect } from 'react'

interface ScreenSize {
  width: number
  height: number
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({ width: 0, height: 0 })

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return screenSize
}

export default useScreenSize
