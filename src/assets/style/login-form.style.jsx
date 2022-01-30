import styled from 'styled-components'

export const Wrapper = styled.div`
    align-items: center;
    background-color: var(--blue);
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

export const Modal = styled.div`
    display: block;
    background-color: var(--light-yellow);
    border: 2px solid var(--yellow);
    border-radius: 8px;
    margin: 0 auto;
    padding: 30px 15px;
    width: 55vw;
`

export const Row = styled.div`
    margin: 10px;
`
export const Label = styled.label`
    box-sizing: border-box;
    display: inline-block;
    margin-right: 10px;
    text-align: right;
    width: 25%;
`

export const Input = styled.input`
    border: 2px solid var(--blue);
    border-radius: 3px;
    box-sizing: border-box;
    padding: 5px;
    width: 50%;

    &:focus-visible,
    &:focus {
        outline-color: var(--blue);
    }
`

export const Error = styled(Row)`
    color: red;
    font-weight: bold;
    text-align: center;
`

export const Button = styled.button`
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    color: var(--light-yellow);
    cursor: pointer;
    float: right;
    font-size: 14px;
    font-weight: bold;
    margin: 4px 2px;
    padding: 16px 26px 16px 33px;
    text-decoration: none;
`

export const Li = styled.li`
  border-radius: 5px;
  display: inline-block;
  padding: 1rem;
  width: 40%;
  text-align: center;
  cursor: pointer;
  ${props => props.active && `
    background-color: var(--blue);
    color: var(--light-yellow);
  `}
`

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`

export const Img = styled.img`
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  margin-bottom: 2rem;
`
