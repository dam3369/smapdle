import runtime from './runtime'
import localstorage from './localstorage'
import crashReporter from './crash-report'
import firestoreDb from './firestore-db'
import debugStore from './debug-store'
import mapbox from './mapbox'

const middlewares = [
  crashReporter,
  runtime,
  localstorage,
  firestoreDb,
  debugStore,
  mapbox,
]

export default middlewares
