import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { createMarker, positionToLngLat } from 'utils/mapbox'

const useMarker = ({ position, uid, canMove }) => {
  const [ el ] = useState(document.createElement('div'))
  const map = useSelector(state => state.app.map)
  const token = useRef(null)

  useEffect(() => {
    if (!token.current) {
      token.current = createMarker({
        el,
        position,
        map: map,
      })

      if (canMove) {
        token.current.addControl(uid)
      }
    }

    token.current.item.setLngLat(positionToLngLat(position))

  }, [ map, el, position, uid, canMove ])

  return {
    el,
    map,
    token,
  }
}

export default useMarker

export { useIsVisible } from './is-visible'
export { useMovement } from './movement'
export { useSizeable } from './sizeable'
