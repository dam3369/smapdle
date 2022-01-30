import { FirebaseAuthProvider, IfFirebaseUnAuthed, FirebaseAuthConsumer, IfFirebaseAuthed } from '@react-firebase/auth'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import firebase from 'utils/firebase'
import config from 'utils/app-config'
import Login from './login'
import Map from './map'
import { ActorPanel, CasesPanel, ToolsPanel, SidePanel } from './panel'
import { PanelContainer, AdminPanel, UserPanel } from './panel/base/panel'
import { setUser } from 'store/actions'

const App = () => {
  const dispatch = useDispatch()
  const [ sideSize, setSideSize ] = useState(20)


  return (
    <FirebaseAuthProvider {...config.firebase} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }) => {
          if (isSignedIn && user.uid !== undefined) {
            dispatch(setUser(user))
          }
        }}
      </FirebaseAuthConsumer>
      <IfFirebaseUnAuthed>
        { () => (<Login />) }
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        { () => (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <SidePanel style={{ width: `${sideSize}vw`}} />
            <Map style={{ width: `${100 - sideSize}vw`}}>
              <PanelContainer>
                <AdminPanel><ToolsPanel /></AdminPanel>
                <UserPanel><CasesPanel /></UserPanel>
              </PanelContainer>  
            </Map>          
          </div>
        ) }
      </IfFirebaseAuthed>
    </FirebaseAuthProvider>
  )
}


export default App
