import Emoji from 'a11y-react-emoji'
import PropTypes from 'prop-types'
import { FaCog } from 'react-icons/fa'

import { SubMenu, HItem, HList } from 'assets/style/menu.style'


const SkinMenu = ({ skins, handleSave, isOpen}) => (
  <>
    <FaCog />
    <SubMenu visibleIf={isOpen}>
      <HList>
        { skins.map((skin, id) => (
          <HItem key={id} onClick={() => handleSave(id + 1)}>
            <Emoji symbol={skin} label={`z-${id}`} />
          </HItem>
        )) }
      </HList>
    </SubMenu>
  </>
)

SkinMenu.propTypes = {
  skins: PropTypes.array.isRequired,
  handleSave: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

SkinMenu.defaultProps = {
  isOpen: false,
}

export default SkinMenu
