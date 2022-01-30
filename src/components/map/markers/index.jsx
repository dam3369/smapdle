import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import CssHack from './css-hack'
import Filter from './filter'
import { initApp } from 'store/actions'
import appConfig from 'utils/app-config'


const Markers = ({ map }) => {
  const dispatch = useDispatch()
  const isLoaded = useSelector((state) => state.app.isLoaded)

  useEffect(() => {
    if (isLoaded === false) {
      return dispatch(initApp())
    }
  })

  return (
    <>
      <CssHack map={map} />
      { isLoaded && appConfig.markers.map((marker, key) => <Filter key={key} {...marker} />) }
    </>
  )
}

export default Markers
