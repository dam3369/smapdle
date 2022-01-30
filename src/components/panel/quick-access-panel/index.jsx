
import Emoji from 'a11y-react-emoji'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { dndMovePlayerMarker, flyTo } from 'store/actions'
import { getSkin } from 'components/player/skin'
import { json } from 'utils/app-func'
import useAcl from 'hooks/acl'

const RightPanel = styled.div`
  background-color: #fff;
  border-radius: 5px 0 0 5px;
  box-sizing: border-box;
  right: 0;
  padding: 5px;
  position: absolute;
  top: calc(50% - 100px);
  overflow-y: visible;
  width: 55px; 
`

const PlayerRow = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.4em;
  overflow: hidden;
  padding: 10px;
  width: 25px;
`

const Name = styled.div`
  font-size: 1em;
  float: left;
  position: absolute;
  text-align: right;
  width: 100px;
  left: -115px;
  display: none;

  &.hover {
    display: block;
  }
`

const NameDecorator = styled.span`
  background-color: #ffffff75;
  border-radius: 20px;
  padding: 5px 10px ;
`

const Skin = styled.div`
  padding-right: 12px;
  cursor: pointer;
`

const Player = ({ player: { uid, name, skin, owner } }) => {
  const dispatch = useDispatch()
  const skinIcon = getSkin(skin)
  const [ isHover, setIsHover ] = useState(false)
  const handleHover = (state) => () => {
    setIsHover(state)
  }
  const handleDrag = (event) => {
    setIsHover(false)
    event.stopPropagation()
    event.dataTransfer.effectAllowed = 'copy'
    event.dataTransfer.setData('text/plain', json`${dndMovePlayerMarker(uid)}`)
  }
  const { canMove } = useAcl({ type: 'player', owner })

  return (
    <PlayerRow onDragOver={(e) => e.preventDefault()} className={isHover && 'hover'} onMouseEnter={handleHover(true)} onMouseLeave={handleHover(false)}>
      <Name className={isHover && 'hover'}><NameDecorator>{name}</NameDecorator></Name>
      <Skin onClick={() => dispatch(flyTo({ token: 'player', uid }))} draggable={canMove} onDragStart={handleDrag} onDragEnd={() => {}}><Emoji symbol={skinIcon} label={name} /></Skin>
    </PlayerRow>
  )
}

export const QuickAccessPanel = () => {
  const players = useSelector(state => state.markers.player)

  return (<RightPanel onDrop={(e) => { e.stopPropagation(); e.preventDefault() }} onDragOver={(e) => e.preventDefault()}>
    { Object.keys(players).map(uid => <Player key={uid} player={players[uid]} />) }
  </RightPanel>)
}
