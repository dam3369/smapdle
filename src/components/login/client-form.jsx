import { useState } from 'react'
import PropTypes from 'prop-types'

import { Row, Label, Input, Error, Button } from 'assets/style/login-form.style'
import { useError } from './hook'
import { authenticate } from 'utils/firebase'

const ClientForm = () => {
  const [ login, setLogin ] = useState(window.location.hash ? window.location.hash.slice(1) : '')
  const [ isError, error, trigError ] = useError()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const [ isSuccess, reasonFail ] = await authenticate(login, '0s3f-p@ss')
    trigError(!isSuccess, reasonFail)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Label htmlFor="login">Login</Label>
        <Input id="login" type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </Row>

      {isError && (<Error>{error}</Error>)}
      <Row>
        <Button type="submit">Submit</Button>
      </Row>
    </form>
  )
}

export default ClientForm
