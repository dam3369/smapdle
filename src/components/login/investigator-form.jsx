import { useState } from 'react'
import PropTypes from 'prop-types'

import { Row, Label, Input, Error, Button } from 'assets/style/login-form.style'
import { useError } from './hook'

import { authenticate } from 'utils/firebase'

const InvestigatorForm = () => {
  const [ login, setLogin ] = useState('')
  const [ paswd, setPaswd ] = useState('')
  const [ isError, error, trigError ] = useError()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const [ isSuccess, reasonFail ] = await authenticate(login, paswd)
    trigError(!isSuccess, reasonFail)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Label htmlFor="login">Login</Label>
        <Input id="login" type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </Row>

      <Row>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={paswd} onChange={(e) => setPaswd(e.target.value)} />
      </Row>
      {isError && (<Error>{error}</Error>)}
      <Row>
        <Button type="submit">Submit</Button>
      </Row>
    </form>
  )
}

export default InvestigatorForm
