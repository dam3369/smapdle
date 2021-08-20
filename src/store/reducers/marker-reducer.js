import { createReducer } from '@reduxjs/toolkit'

import { UPDATE_MARKER, ADD_MARKER, SET_IS_OVER_MARKER, DELETE_MARKER } from '../../actions'

const initialState = {
  z: {},
  player: {},
  vehicule: {},
  incident: {},
  car: {},
  boat:  {},
}

const defaultMarker = {
  hidden: true,
  skin: 1,
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
  }
})


export default markerReducer