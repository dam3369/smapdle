import { createMiddleware } from 'utils/app-func'
import { EASE_TO, FLY_TO, JUMP_TO } from 'store/actions'
import { positionToLngLat } from 'utils/mapbox'

const moveTo = (movementType) => ({ getState, action }) =>{
  const { map } = getState().app
  const { lng, lat } = positionToLngLat(action.payload)

  map[movementType]({ center: [lng, lat] })
}

const mapbox = createMiddleware({
  name: 'Mapbox',
  middleware: {
    [FLY_TO]: moveTo('flyTo'),
    [JUMP_TO]: moveTo('jumpTo'),
    [EASE_TO]: moveTo('easeTo'),
  }
})

export default mapbox
