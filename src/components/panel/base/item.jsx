import Emoji from 'a11y-react-emoji'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa'
import { isEqual } from 'lodash'


import { Li } from 'assets/style/panels/menu.style'
import { setIsOverMarker, flyTo, toggleVisibility, deleteToken } from 'store/actions'
const ListItem = styled(Li)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

const Item = ({ uid, type, getSkin, isHiddable }) => {
  const { skin, isHidden, isDead, token } = useSelector(state => state.markers[type][uid], isEqual)
  const dispatch = useDispatch()
  const handleOver = (isOver) => dispatch(setIsOverMarker({
    uid,
    token,
    isOver,
  }))
  const handleFlyTo = () => dispatch(flyTo({ token, uid}))

  return (
    <ListItem onMouseOver={() => handleOver(true)} onMouseLeave={() => handleOver(false)}>
      <div onClick={handleFlyTo}>
        { !isDead && <Emoji symbol={getSkin(skin)} label="z" /> }
        { isDead && <Emoji symbol="💀" label="z" /> }
      </div>

      { isHiddable && <div onClick={() => dispatch(toggleVisibility({uid, isHidden: !isHidden}))}>
        { isHidden ? <FaEyeSlash /> : <FaEye /> }
      </div> }
      
      <div onClick={() => dispatch(deleteToken(uid))}>
        <FaTrash />
      </div>
    </ListItem>
  )
}

export default Item
