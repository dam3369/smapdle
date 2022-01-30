import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
  display: flex;
  height: 90%;
  justify-content: center;
  left: 100%;
  opacity: 0.85;
  overflow: hidden;
  position: absolute;
  top: 5%;
  text-align: right;
  transition-duration: 250ms;
  transition-property: width;
  width: 0;

  &.open {
    width: 60%;
  }
`

export const Icon = styled.div`
  font-size: 30px;
  padding-right: 10px;
  width: 40px;
`
