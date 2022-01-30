import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, createDispatchHook, createSelectorHook } from 'react-redux'
import { createContext } from 'react'

let increment = 0

export const INFO = 'info'
export const SUCCESS = 'success'
export const WARNING = 'warn'
export const ERROR = 'error'

const flashSlice = createSlice({
  name: 'flash',
  initialState: [],
  reducers: {
    setSuccess(state, action) {
      state.push({
        id: increment++,
        content: action.payload,
        style: SUCCESS,
        timeout: 2000,
      })
    },
    setInfo(state, action) {
      state.push({
        id: increment++,
        content: action.payload,
        style: INFO,
      })
    },
    setWarning(state, action) {
      state.push({
        id: increment++,
        content: action.payload,
        style: WARNING,
      })
    },
    setError(state, action) {
      state.push({
        id: increment++,
        content: action.payload,
        style: ERROR,
        timeout: 5000,
      })
    },
    removeFlash(state, action) {
      return state.filter(flash => flash.id !== action.payload)
    }
  }
})

export const flashStore = configureStore({ reducer: flashSlice.reducer })

export const FlashContext = createContext(null)
export const useFlashDispatch = createDispatchHook(FlashContext)
export const useSelector = createSelectorHook(FlashContext)

export const { setSuccess, setError, setInfo, setWarning, removeFlash } = flashSlice.actions

window.errors = []
export const flashErrorMsg = (content, error) => {
  window.errors.push(error)
  console.error(error)
  flashStore.dispatch(setError(content))
}

export const flashSuccess = (content) => {
  console.info(content)
  flashStore.dispatch(setSuccess(content))
}

export const flashInfo = (content) => {
  console.info(content)
  flashStore.dispatch(setInfo(content))
}

export const FlashProvider = ({ children }) => (
  <Provider context={FlashContext} store={flashStore}>
    {children}
  </Provider>
)
