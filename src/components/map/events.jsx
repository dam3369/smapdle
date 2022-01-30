import { useEffect } from 'react'
import config from 'utils/app-config'

const Events = ({ map }) => {
  useEffect(() => {
    if (!map.current) { return }

    if (config.map.with3DBuilding) { active3DLayer(map.current) }

  })

  return (<></>)
}

export default Events

const active3DLayer = (map) => {
  const layers = map.getStyle().layers;
  const labelLayerId = layers.filter(({ type, layout }) => type === 'symbol' && layout['text-field'])
                            .reduce((layer) => layer?.id)


  // The 'building' layer in the Mapbox Streets
  // vector tileset contains building height data
  // from OpenStreetMap.
  map.addLayer({
    'id': 'add-3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': '#aaa',

      // Use an 'interpolate' expression to
      // add a smooth transition effect to
      // the buildings as the user zooms in.
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'height']
      ],
      'fill-extrusion-base': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'min_height']
      ],
      'fill-extrusion-opacity': 0.8
    }
  }, labelLayerId);
}
