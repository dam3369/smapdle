import PropTypes from 'prop-types'
import Emoji from 'a11y-react-emoji'

import { Icon } from 'assets/style/panels/admin.style'
import { Ul, Li } from 'assets/style/panels/menu.style'
import useAcl from 'hooks/acl'

const Menu = ({ handleDragStart, handleDragEnd }) => {
  const { canRead } = useAcl({ type: `panels` })

  return (
    <>
      {
        canRead && (
          <Ul>
            <Li>
              <Icon draggable onDragStart={(e) => handleDragStart(e, 'actor', '👨')} onDragEnd={() => handleDragEnd()}>
                <Emoji title="Add actor" symbol="👨" label="actor" />
              </Icon>
            </Li>
            <Li>
              <Icon draggable onDragStart={(e) => handleDragStart(e, 'investigator', '🕵️‍♂️')} onDragEnd={() => handleDragEnd()}>
                <Emoji title="Add investigator" symbol="🕵️‍♂️" label="investigator" />
              </Icon>
            </Li>
            <Li>
              <Icon draggable onDragStart={(e) => handleDragStart(e, 'location', '🏘️')} onDragEnd={() => handleDragEnd()}>
                <Emoji title="Add location" symbol="🏘️" label="location" />
              </Icon>
            </Li>
            <Li>
              <Icon draggable onDragStart={(e) => handleDragStart(e, 'recorder', '📷')} onDragEnd={() => handleDragEnd()}>
                <Emoji title="Add recorder" symbol="📷" label="recorder" />
              </Icon>
            </Li>
            <Li>
              <Icon draggable onDragStart={(e) => handleDragStart(e, 'vehicle', '🚗')} onDragEnd={() => handleDragEnd()}>
                <Emoji title="Add vehicule" symbol="🚗" label="vehicle" />
              </Icon>
            </Li>
          </Ul>
        )
      }
    </>
  )
}

Menu.propTypes = {
  handleDragStart: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
}

export default Menu
