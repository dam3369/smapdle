import { createReducer } from '@reduxjs/toolkit'

import { SET_USER, SET_USER_INFO, SET_MAP, SET_IS_LOADED, SET_STEP_FULFILLED, SET_CASES, SET_CURRENT_CASE } from 'store/actions'

const initialState = {
  user: null,
  map: null,
  isLoaded: false,
  loadingStep: 0,
  cases: [],
  currentCase: null,
}

const appReducer = createReducer(initialState, {
  [SET_USER]: (state, action) => void (state.user = action.payload),
  [SET_USER_INFO]: (state, action) => void (state.user = { ...state.user, ...action.payload }),
  [SET_MAP]: (state, action) => void (state.map = action.payload),
  [SET_IS_LOADED]: (state) => void (state.isLoaded = true),
  [SET_STEP_FULFILLED]: (state) => void (state.loadingStep = state.loadingStep + 1),
  [SET_CASES]: (state) => void (state.cases = state.user.cases),
  [SET_CURRENT_CASE]: (state, action) => void (state.currentCase = action.payload),
})

export default appReducer
