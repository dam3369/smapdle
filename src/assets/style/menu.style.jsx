import styled from 'styled-components'

export const Menu = styled.div`
  background: white;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  left: 100%;
  margin-left: 10px;
  top: 0;

  &:after {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #fff;
    clear: both;
    content: '';
    height: 0;
    position: absolute;
    right: 100%;
    top: 15px;
    width: 0;
  }
`

export const SubMenu = styled.div`
  background: white;
  display: ${(props) => props.visibleIf === false ? 'none' : 'block'};
  border-radius: 0 5px 5px 0;
  left: 100%;
  padding: 5px;
  position: absolute;
  top: -3px;
`

export const VList = styled.ul`
  cursor: pointer;
`
export const VItem = styled.li`
  display: ${(props) => props.visibleIf === false ? 'none' : 'block'};
  position: relative;
  padding: 3px;
`
export const HList = styled(VList)`
  display: flex;
`

export const HItem = styled(VItem)`
  padding: 0 5px;
`
