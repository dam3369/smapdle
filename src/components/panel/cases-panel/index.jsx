import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'

import { setCurrentCase } from 'store/actions'
import { Select, Container, Dropdown, Option } from 'assets/style/panels/case'
import { useState } from 'react'

const casesSelector = createSelector(
  state => state.app.cases,
  state => state.app.current_case,
  (cases, currentCase) => [cases, currentCase]
)


export const CasesPanel = () => {
  const dispatch = useDispatch()
  const [cases, current] = useSelector(casesSelector)
  const [isVisible, setVisible] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.value === 'new') {
      e.target.value = current
      setVisible(true)
      return
    }

    dispatch(setCurrentCase(e.target.value))
  }

  return (
    <>
      <Container>
        <Dropdown>
          <Select className="form-control" onChange={handleSubmit} defaultValue={current}>
            { cases.map(item => (
              <Option key={item} value={item}>{item}</Option>
            )) }
            <Option value="new">New case</Option>
          </Select>
        </Dropdown>
      </Container>

      {isVisible && (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisi vel consectetur euismod,
            nisl nisi consectetur nisl, eget egestas nisl nisi
            velit eget nisl.
          </p>
        </div>
      )}
    </>
  )
}
