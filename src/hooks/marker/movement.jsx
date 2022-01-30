import { point, circle } from '@turf/turf'
import { useEffect, useRef } from 'react'

const options = {
  steps: 64,
  units: 'meters',
}

export const useMovement = (token, map, speed = 10) => {
  const ref = useRef(null)
  
  useEffect(() => {
    if (ref.current) return
    
    token.current.item.on('dragstart', () => {
      const { lng, lat } = token.current.item.getLngLat()

      map.getSource('movement-data').setData(circle(point([ lng, lat ]), speed, options));
      map.setLayoutProperty('movement-circle', 'visibility', 'visible')
    })

    token.current.item.on('dragend', () => {
      map.getSource('movement-data').setData(null);
      map.setLayoutProperty('movement-circle', 'visibility', 'none')
    })
  })
}

export default useMovement
