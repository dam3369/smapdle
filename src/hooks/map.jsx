import { useRef, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

import { setCurrentLocation } from 'store/actions'

const useMap = ({ accessToken, style }) => {
  const map = useRef(null)
  const mapRef = useRef(null)
  const [ isMapLoaded, setIsLoaded ] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
      if (map.current) return; // initialize map only once

      mapboxgl.accessToken = accessToken

      // Init map position
      const lng = window.localStorage.getItem('lng') || -70.9
      const lat = window.localStorage.getItem('lat') || 42.35
      const zoom = window.localStorage.getItem('zoom') || 9

      // create map
      map.current = new mapboxgl.Map({
          container: mapRef.current,
          style: style,
          center: [ lng, lat ],
          zoom: zoom
      })

      // attach basic controllers
      map.current.addControl(new MapboxGeocoder({ accessToken, mapboxgl}))
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

      map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-right')
      map.current.doubleClickZoom.disable()

      // attach map listeners
      map.current.on('load', () => setIsLoaded(true))

      map.current.on('zoomend', () => {
        window.localStorage.setItem('zoom', map.current.getZoom())
      })

      map.current.on('moveend', () => {
        const { lng, lat } = map.current.getCenter()

        dispatch(setCurrentLocation({ lng, lat }))
        window.localStorage.setItem('lng', lng)
        window.localStorage.setItem('lat', lat)
      })
  })

  return {
    isMapLoaded,
    map,
    mapRef,
  }
}

export default useMap
