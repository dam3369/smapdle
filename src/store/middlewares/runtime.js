import { 
  INIT_APP, SET_STEP_FULFILLED,
  loadUser, loadMarkers, setIsLoaded, loadCases, stepFulfilled,
} from 'store/actions'
import { createMiddleware } from 'utils/app-func'
import { flashSuccess, flashInfo, flashErrorMsg } from 'utils/flash'

let r = 0
const USER = ++r
const CASES = ++r
const MARKER = ++r
const END = ++r

let s = 0

const runtime = createMiddleware({
  name: 'Runtime',
  middleware: {
    [INIT_APP]: ({ dispatch }) => {
      dispatch(stepFulfilled())
    },
    [SET_STEP_FULFILLED]: ({ dispatch }) => {
      s = s + 1
      switch (s) {
        case USER:
          flashInfo('Loading user...')
          dispatch(loadUser())
          break
        case CASES:
          flashInfo('Loading cases...')
          dispatch(loadCases())
          break
        case MARKER:
          flashInfo('Loading markers...')
          dispatch(loadMarkers())
          break
        case END:
          flashSuccess('App loaded...')
          dispatch(setIsLoaded())
          break
        default:
          flashErrorMsg('Wrong runtime step')
          break
      }

      return ({store}) => console.log(store.getState().app.loadingStep)
    }
  }
})

export default runtime
