import Emoji from "a11y-react-emoji"

import { Wrapper, Icon } from 'assets/style/panels/trash.style'


const Trash = ({ isOpen }) => (
  <Wrapper className={isOpen && 'open'}>
    <Icon><Emoji symbol="🗑️" label="login" /></Icon>
  </Wrapper>
)

export default Trash
