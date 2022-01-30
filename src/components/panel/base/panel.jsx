
import useAcl from 'hooks/acl'
import { isEqual } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { positionToLngLat } from 'utils/mapbox'
import Item from './item'
import { List, Wrapper } from 'assets/style/panels/admin.style'

export const BasePanel = ({ style, markers, markerType, getSkin, isHiddable }) => {
  const ref = useRef()
  const map = useSelector(state => state.app.map, isEqual)
  const [bounds, setBounds] = useState(map.getBounds())

  useEffect(() => {
    if (ref.current) { return }

    map.on('zoomend', () => {
      setBounds(map.getBounds())
    })

    map.on('moveend', () => {
      setBounds(map.getBounds())
    })

    ref.current = true
  })

  return (
    <Wrapper style={style}>
      <List className={isHiddable && 'is-hiddable-item'}>
        { markers.filter(({ position }) => bounds.contains(positionToLngLat(position))).map(({ uid }) => <Item key={uid} uid={uid} type={markerType} getSkin={getSkin} isHiddable={isHiddable} />) }
      </List>
    </Wrapper>
  )
}

BasePanel.propTypes = {
  style: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired,
  markerType: PropTypes.string.isRequired,
  getSkin: PropTypes.func.isRequired,
  isHiddable: PropTypes.bool,
}

BasePanel.defaultProps = {
  isHiddable: false,
}

const BaseContainer = ({ children }) => {
  const { canRead } = useAcl({ type: `panels`, owner: false })
  
  return (
    <>
      { canRead && children}
    </>
  )
}

BaseContainer.propTypes = { 
  children: PropTypes.node.isRequired,
}


export const AdminPanel = ({ children }) => (<>{children}</>)
AdminPanel.displayName = 'AdminPanel'
export const UserPanel = ({ children }) => (<>{children}</>)
UserPanel.displayName = 'UserPanel'

export const PanelContainer = ({ children }) => {
  const isLoaded = useSelector(state => state.app.isLoaded)
  const userPanels = children.filter(({ type }) => type.displayName === UserPanel.displayName)
  const adminPanels = children.filter(({ type }) => type.displayName === AdminPanel.displayName)
  
  return (
    <>
      { isLoaded && (
        <>
          { userPanels }
          <BaseContainer>{ adminPanels }</BaseContainer>
        </>
      )}
    </>
  )
}

PanelContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
