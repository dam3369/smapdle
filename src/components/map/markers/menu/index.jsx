import PropTypes from 'prop-types'
import { FaEye, FaEyeSlash, FaSkull, FaTrashAlt } from 'react-icons/fa'

import { Menu, VList, VItem } from 'assets/style/menu.style'
import { changeSkin, changeWeapon, deleteToken, kill, saveSize, toggleVisibility } from 'store/actions'

import SizeMenu, { shapeSize } from './size-menu'
import SkinMenu from './skin-menu'
import { useMenuReducer, useHandler } from './hook'
import WeaponMenu from './weapon-menu'


const Component = ({ closeMenu, uid, size, skin, visibility, dead, rotate, weapon, canDelete }) => {

  const [ isOpen, open, { skinMenu, sizeMenu, weaponMenu, close } ] = useMenuReducer()
  const handle = useHandler(closeMenu, () => open(close))

  return (
    <Menu>
      <VList>
        { visibility && (
          <VItem visibleIf={!dead?.isDead} onClick={() => handle(() => toggleVisibility({ uid, isHidden: !visibility.isHidden }))}>
            { visibility.isHidden ? <FaEye /> : <FaEyeSlash /> }
          </VItem >
        ) }
        { dead && (
          <VItem visibleIf={!dead.isDead} onClick={() => handle(() => kill(uid))}>
            <FaSkull />
          </VItem>
        ) }
        { skin && (
          <VItem visibleIf={!dead?.isDead} onClick={() => open(skinMenu)}>
            <SkinMenu 
              skins={skin.skins} 
              handleSave={(skin) => handle(() => changeSkin({ uid, skin }))} 
              isOpen={isOpen.skin} 
            />
          </VItem>
        ) }
        { size && (
          <VItem visibleIf={!dead?.isDead} onClick={() => open(sizeMenu)}>
            <SizeMenu 
              size={size} 
              isOpen={isOpen.size} 
              handleSave={(value) => handle(() => saveSize({ uid, size: value }))} 
            />
          </VItem>
        ) }
        { weapon && (
          <VItem visibleIf={!dead?.isDead} onClick={() => open(weaponMenu)}>
            <WeaponMenu 
              weapons={weapon.weapons} 
              isOpen={isOpen.weapon} 
              handleSave={(value) => handle(() => changeWeapon({ uid, weapon: value }))}
            />
          </VItem>
        ) }
        { rotate && (
          <></>
        )}
        { canDelete && (
          <VItem onClick={() => handle(() => deleteToken(uid))}>
            <FaTrashAlt />
          </VItem>
        ) } 
      </VList>
    </Menu>
  )
}

Component.propTypes = {
  uid: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  size: shapeSize,
  skin: PropTypes.shape({ skins: PropTypes.array.isRequired }),
  visibility: PropTypes.shape({ isHidden: PropTypes.bool.isRequired }),
  dead: PropTypes.shape({ isDead: PropTypes.bool.isRequired }),
  rotate: PropTypes.shape({}),
  canDelete: PropTypes.bool,
}

Component.defaultProps = {
  canDelete: true,
}

export default Component
