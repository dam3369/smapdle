import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Emoji from 'a11y-react-emoji'

import { getSkin as getActorSkin } from 'components/markers/actor/skin'
import { getSkin as getInvestigatorSkin } from 'components/markers/investigator/skin'
import { getSkin as getLocationSkin } from 'components/markers/location/skin'
import { getSkin as getRecorderSkin } from 'components/markers/recorder/skin'
import { getSkin as getTrackerSkin } from 'components/markers/tracker/skin'
import { getSkin as getVehiclekin } from 'components/markers/vehicle/skin'
import useLocalstorage from 'hooks/localstorage'

const Arrow = styled.div`
  border-top: solid transparent;
  border-bottom: solid transparent;
  border-right: solid black;
  border-width: 0 3px 3px 0;
`

const ListTitle = styled.h3`
  display: flex;
  flex-direction: row;
`  

const getMarkerSkin = (type) => {
  switch (type) {
    case 'actor':
      return (skin) => getActorSkin(skin)
    case 'investigator':
      return (skin) => getInvestigatorSkin(skin)
    case 'location':
      return (skin) => getLocationSkin(skin)
    case 'recorder':
      return (skin) => getRecorderSkin(skin)
    case 'tracker':
      return (skin) => getTrackerSkin(skin)
    case 'vehicule':
      return (skin) => getVehiclekin(skin)
    default:
      return (skin) => skin
  }
}

const Item = ({ type, uid, getSkin, skin }) => {

  return (
    <li><Emoji symbol={getSkin(skin)} label="type" /> {type} - {uid}</li>
  )
}

const List = ({ type, markers }) => {
  const keys = Object.keys(markers)
  const isItems = keys.length > 0
  const getSkin = getMarkerSkin(type)
  const [ isOpen, setIsOpen ] = useLocalstorage(`menu-${type}-state`, true)
  
  return (
    <>
      <ListTitle><Arrow /> {type}</ListTitle>
      <ul>
        {isItems && keys.map((key) => (<Item key={key} type={type} getSkin={getSkin} {...markers[key]} />))}
        {!isItems && <li>No items</li>}
      </ul>
    </>
  )
}

export const SidePanel = ({ style }) => {
  const markers = useSelector(state => state.markers)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) { return }

  }, [ref])

  return (
    <div style={{ height: '100vh', ...style }}>
      { Object.keys(markers).map((key) => (<List key={key} type={key} markers={markers[key]} />)) }
    </div>
  )
}
