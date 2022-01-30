import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Markers from './markers'
import Events from './events'
import { setMap } from 'store/actions'
import config from 'utils/app-config'
import useMap from 'hooks/map'

const Map = ({ style, children }) => {
    const { map, mapRef, isMapLoaded } = useMap(config.mapbox)
    const dispatch = useDispatch()

    const handleDrop = (event) => {
      const { clientX, clientY, dataTransfer } = event
      const { type, payload } = JSON.parse(dataTransfer.getData('text/plain'))

      event.stopPropagation()
      event.preventDefault()

      dispatch({ 
        type, 
        payload: {
          ...payload,
          clientX,
          clientY,
        }
      })
    }

    useEffect(() => {
      if (isMapLoaded) {
        // save map in store
        dispatch(setMap(map.current))
      }
    })

    return (
        <>
          <div 
            style={{ position: 'relative', height: '100vh', ...style }} 
            onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} 
            ref={mapRef} 
            className="map-container"
          >
            {children}
          </div>
          { isMapLoaded && <><Markers map={map} /><Events map={map} /></> }
        </>
    )
}

export default Map
