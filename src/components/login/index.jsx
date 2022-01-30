import { useState } from 'react'

import InvestigatorForm from './investigator-form'
import ClientForm from './client-form'
import { Wrapper, Modal, Ul, Li, Img, Block } from 'assets/style/login-form.style'

import logo from 'assets/images/ivestigate-logo.png'

const Login = () => {
  const [ formType, setFormType ] = useState('client')

  return (
    <Wrapper>
      <Block>
        <Img src={logo} alt="logo" />
        <Modal>
          <Ul>
            <Li active={formType === 'client'} onClick={() => setFormType('client')}>Client</Li>
            <Li active={formType === 'investigator'} onClick={() => setFormType('investigator')}>Investigator</Li>
          </Ul>
          { formType === 'investigator' && <InvestigatorForm /> }
          { formType === 'client' && <ClientForm /> }
        </Modal>
      </Block>
    </Wrapper>
  )
}

export default Login
