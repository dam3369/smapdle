import { useState, memo } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Emoji from 'a11y-react-emoji'
import isEqual from 'lodash.isequal'

import useMarker from 'hooks/marker'
import useAcl from 'hooks/acl'
import { Container } from 'assets/style/token.style'
import { Wrapper } from 'assets/style/marker.style'

import Menu from 'components/map/markers/menu'

import { getSkin, getSkinSize, skins } from './skin'

const Marker = ({ uid }) => {
  const { skin, position, isOver, token } = useSelector(state => state.markers.vehicle[uid], isEqual)
  const { canMove, canEdit } = useAcl({ type: `${token}` })

  const { el } = useMarker({ position, uid, canMove: canMove })
  const [ isMenuOpen, setMenuIsOpen ] = useState(false)

  return createPortal(
    <Container className={`${isOver ? 'focus' : ''}`}>
      <Wrapper className={`zoom v-token ${getSkinSize(skin)}`} onClick={() => setMenuIsOpen(!isMenuOpen)}>
        <Emoji symbol={getSkin(skin)} label="vehicle" />
      </Wrapper>


      { canEdit && isMenuOpen && 
        <Menu 
          closeMenu={() => setMenuIsOpen(false)} 
          uid={uid} 
          skin={{ skins }} 
        /> 
      }
    </Container>,
    el
  )
}

Marker.propTypes = {
  uid: PropTypes.string.isRequired,
}

export const vehicleMarker = memo(Marker)
