import styled from 'styled-components'

export const Container = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 300px;

:after {
  content: '';
  width: 0;
  height: 0;
  font-size: 0;
  border-top: 0;
  border-left: 15px solid var(--background-color);
  border-right: 0;
  border-bottom: 37px solid transparent;
  position: absolute;
  right: -14px;
  top: 0;
}
:before {
  content: '';
  width: 0;
  height: 0;
  font-size: 0;
  border-top: 0;
  border-left: 0;
  border-right: 15px solid var(--background-color);
  border-bottom: 37px solid transparent;
  position: absolute;
  left: -14px;
  top: 0;
}
`

export const Dropdown = styled.div`
position: relative;
width: 300px;
`

export const Select = styled.select`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
border: none;
outline: none;
background: var(--background-color);
color: var(--foreground-color);
width: 100%;
padding: 10px 20px;
font-size: 22px;
text-align: center;
border-radius: 0 0 15px 15px;
`

export const Option = styled.option`
color: var(--foreground-color);
padding: 0 10px;
`
