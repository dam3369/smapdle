import { useState, useEffect, useRef } from 'react'

export const useIsVisible = (map, visibleAfter) => {

  const ref = useRef(null)
  const [ isVisible, setIsVisible ] = useState(map.getZoom() > visibleAfter)

  useEffect(() => {
    if (ref.current) return;

    map.on('zoom', () => {
      if (isVisible !== (map.getZoom() > visibleAfter)) {
        setIsVisible(map.getZoom() > visibleAfter)
      }
    })

  }, [ isVisible, map, visibleAfter ])

  return isVisible
}

export default useIsVisible
