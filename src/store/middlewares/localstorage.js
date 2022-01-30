import { SET_CURRENT_CASE, SET_CURRENT_LOCATION } from 'store/actions'
import { createMiddleware, json } from 'utils/app-func'

const localstorage = createMiddleware({
  name: 'LocalStorage',
  middleware: {
    [SET_CURRENT_CASE]: ({ action }) => {
      window.localStorage.setItem('current_case', action.payload)
    },
    [SET_CURRENT_LOCATION]: ({ getState, action }) => {
      window.localStorage.setItem(`${getState().app.currentCase}_location`, json`${action.payload}`)
    }
  }
})

export default localstorage
