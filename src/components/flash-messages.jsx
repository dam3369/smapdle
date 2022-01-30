import { useEffect, useRef } from 'react'
import { useSelector, useFlashDispatch, removeFlash, INFO, SUCCESS, WARNING, ERROR } from '../utils/flash'
import styled from 'styled-components'
import { FaInfo, FaLaughWink, FaGrimace, FaDizzy } from 'react-icons/fa'

const Container = styled.div`
  bottom: 20px;
  position: absolute;
  left: 30%;
  width: 40%;
`
const Item = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  justify-content: flex-start;
  margin: 3px auto;
  transition: .2s;
  transform: translateY(16px);
  transform-origin: bottom center;
  padding: 10px;

  &.info {
    background-color: var(--background-color);
    color: var(--foreground-color);
  }

  &.success {
    background-color: var(--blue);
    color: var(--yellow);
  }

  &.warning {
    background-color: #ffe5b3;
    color: #b85b06;
  }

  &.error {
    background-color: #ffdbdb;
    color: #c30000;
  }
`

const ItemIcon = styled.span`
  padding-right: 10px
`

const Message = ({ id, style, content, timeout }) => {
  const msg = useRef(null)
  const dispatch = useFlashDispatch()

  useEffect(() => {
    if (msg.current) return
    
    setTimeout(() => dispatch(removeFlash(id)), timeout || 1000)
  })

  return (
    <Item className={`${style}`}>
      <ItemIcon>
        { style === INFO && <FaInfo /> }
        { style === SUCCESS && <FaLaughWink /> }
        { style === WARNING && <FaGrimace /> }
        { style === ERROR && <FaDizzy /> }
      </ItemIcon>
      <span>{ content }</span>
    </Item>
  )
}

const FlashMessages = () => {
  const messages = useSelector(state => state)

  return (
    <Container>
      { messages.map((msg) => <Message key={msg.id} {...msg} />)}
    </Container>
  )
}


export default FlashMessages
