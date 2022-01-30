import { firestore, store } from 'utils/firebase'
import {
  LOAD_MARKERS, LOAD_USER, CREATE_MARKER_AT_POSITION, TOGGLE_VISIBILITY, KILL, DELETE, CHANGE_SKIN, SET_SIZE, CHANGE_WEAPON, LOAD_CASES, CHANGE_CASES,
  updateMarker, addMarker, deleteMarker, setUserInfo, MOVE_PLAYER_MARKER, stepFulfilled, setCases, clearMarkers, setCurrentCase, flyTo, jumpTo, easeTo,
} from 'store/actions'
import { getMousePosition } from 'utils/mapbox'
import { flashErrorMsg } from 'utils/flash'
import { createMiddleware } from 'utils/app-func'

const _it = {
  markerStore: store('markers'),
  unsuscribe: null,
}

const snapshotToMarker = (dispatch) => (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const marker = { uid: change.doc.id, ...change.doc.data() }

    switch (change.type) {
      case 'added':
        dispatch(addMarker(marker))
        return
      case 'modified':
        dispatch(updateMarker(marker))
        return
      case 'removed':
        dispatch(deleteMarker(marker))
        return
      default:
        flashErrorMsg('This is crap', change)
        return
    }
  })
}

const firestoreDb = createMiddleware({
  name: 'Firestore',
  middleware: {
    // Load user from firestore
    [LOAD_USER]: async ({ getState, dispatch }) => {
      const user = await firestore.collection('users').doc(getState().app.user.uid).get()
      
      dispatch(setUserInfo(user.data()))
      dispatch(stepFulfilled())
    },
    // Load default cases from the user
    [LOAD_CASES]: async ({ getState, dispatch }) => {
      const currentCase = window.localStorage.getItem('current_case') !== null ? window.localStorage.getItem('current_case') : getState().app.user.cases[0]

      dispatch(setCases(getState().app.user.cases))
      dispatch(setCurrentCase(currentCase))

      if (window.localStorage.getItem(`${currentCase}_location`) !== null) {
        const { lng, lat } = JSON.parse(window.localStorage.getItem(`${currentCase}_location`))

        window.localStorage.setItem('lng', lng)
        window.localStorage.setItem('lat', lat)
        dispatch(easeTo({ longitude: lng, latitude: lat }))
      }

      dispatch(stepFulfilled())
    },
    // Load markers and subscribe to marker's updates
    [LOAD_MARKERS]: async ({ getState, dispatch }) => {
      if (getState().app.isLoaded) { return }

      _it.unsuscribe = firestore.collection('markers').where('case', 'in', getState().app.cases).onSnapshot((snapshot) => {
        snapshotToMarker(dispatch)(snapshot)

        dispatch(stepFulfilled())
      })
    },
    // Update cases visible to user then update marker's subscriptions
    [CHANGE_CASES]: ({ dispatch }) => ({ store }) => {
      _it.unsuscribe()
      dispatch(clearMarkers())
      _it.unsuscribe = firestore.collection('markers').where('case', 'in', store.getState().app.cases).onSnapshot((snapshot) => {
        snapshotToMarker(dispatch)(snapshot)
      })
    },
    [CREATE_MARKER_AT_POSITION]: ({ getState, action }) => {
      const { lng, lat } = getMousePosition(action.payload, getState().app.map)

      _it.markerStore.create({
        position: { latitude: lat, longitude: lng },
        case: getState().app.currentCase,
        owner: getState().app.user.uid,
        token: action.payload.token,
        isHidden: !action.payload.visibility,
      })
    },
    [MOVE_PLAYER_MARKER]: ({ getState, action }) => {
      const { lng, lat } = getMousePosition(action.payload, getState().app.map)

      _it.markerStore.update({
        position: { latitude: lat, longitude: lng },
        uid: action.payload.uid,
      })
    },
    [TOGGLE_VISIBILITY]: ({ action }) => _it.markerStore.update(action.payload),
    [CHANGE_SKIN]: ({ action }) => _it.markerStore.update(action.payload),
    [CHANGE_WEAPON]: ({ action }) => _it.markerStore.update(action.payload),
    [SET_SIZE]: ({ action }) => _it.markerStore.update(action.payload),
    [KILL]: ({ action }) => _it.markerStore.update({ uid: action.payload, isDead: true }),
    [DELETE]: ({ action }) => _it.markerStore.remove(action.payload),
  }
})

export default firestoreDb
