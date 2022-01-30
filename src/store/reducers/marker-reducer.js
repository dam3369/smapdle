import { createReducer } from '@reduxjs/toolkit'

import { UPDATE_MARKER, ADD_MARKER, SET_IS_OVER_MARKER, DELETE_MARKER, CLEAR_MARKERS } from 'store/actions'

const initialState = {
  actor: {},
  investigator: {},
  location: {},
  recorder: {},
  vehicle: {},
}

const defaultMarker = {
  skin: 1,
  v: 0,
  isOver: false,
  isDead: false,
}

const markerReducer = createReducer(initialState, {

  [ADD_MARKER]: (state, action) => {
    const { token, uid } = action.payload
    state[token][uid] = {
      ...defaultMarker,
      ...action.payload
    }

    return state
  },

  [UPDATE_MARKER]: (state, action) => {
    const { token, uid } = action.payload
    state[token][uid] = {
      ...state[token][uid],
      ...action.payload,
      v: state[token][uid].v + 1,
    }

    return state
  },

  [SET_IS_OVER_MARKER]: (state, action) => {
    const { token, uid, isOver } = action.payload
    state[token][uid].isOver = isOver

    return state
  },

  [DELETE_MARKER]: (state, action) => {
    const { token, uid } = action.payload
    delete state[token][uid]

    return state
  },

  [CLEAR_MARKERS]: () => initialState
})


export default markerReducer
