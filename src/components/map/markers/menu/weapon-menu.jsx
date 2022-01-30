import PropTypes from 'prop-types'

import { GiAxeSword } from 'react-icons/gi'
import { SubMenu, HList, HItem } from 'assets/style/menu.style'


const WeaponMenu = ({ weapons, isOpen, handleSave }) => (
  <>
    <GiAxeSword />
    <SubMenu visibleIf={isOpen}>
      <HList>
        { weapons.map((Weapon, id) => (
          <HItem key={id} onClick={() => handleSave(id + 1)}>
            <Weapon />
          </HItem>
        )) }
      </HList>
    </SubMenu>
  </>
)

WeaponMenu.propTypes = {
  weapons: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  handleSave: PropTypes.func.isRequired,
}

WeaponMenu.defaultProps = {
  isOpen: false,
}

export default WeaponMenu
