import PropTypes from 'prop-types'
import { FaCheck, FaExpandAlt, FaMinus, FaPlus } from 'react-icons/fa'

import { HItem, HList, SubMenu } from 'assets/style/menu.style'


const SizeMenu = ({ size: { value, setSize, limite }, isOpen, handleSave }) => (
  <>
    <FaExpandAlt />
    <SubMenu onClick={e => e.stopPropagation()} visibleIf={isOpen}>
      <HList>
        <HItem>
          <button disabled={value >= limite} onClick={() => setSize(value + 1)}>
            <FaPlus />
          </button>
        </HItem>
        <HItem>
          <button disabled={value <= 0} onClick={() => setSize(value - 1)}>
            <FaMinus />
          </button>
        </HItem>
        <HItem>
          <button onClick={() => handleSave(value)}>
            <FaCheck />
          </button>
        </HItem>
      </HList>
    </SubMenu>
  </>
)

export const shapeSize = PropTypes.shape({
  value: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
  limite: PropTypes.number,
})

SizeMenu.propTypes = {
  size: shapeSize.isRequired,
  isOpen: PropTypes.bool,
  handleSave: PropTypes.func.isRequired,
}

SizeMenu.defaultProps = {
  size: { limite: 15},
  isOpen: false,
}

export default SizeMenu
