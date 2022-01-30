import { database } from '../../utils/firebase'
import { SET_USER } from '../../store/actions'

const realtimeDb = store => next => action => {

  switch(action.type) {
    case SET_USER:
      database.ref('users/' + action.payload.uid).set(action.payload).catch(onRejected => console.error(onRejected))
      break
    default:
      break
  }

  return next(action)
}

export default realtimeDb
