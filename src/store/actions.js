import { createAction } from '@reduxjs/toolkit'

// USER EVENTS
export const SET_USER = Symbol('SET_USER_@_APP')
export const setUser = createAction(SET_USER, ({ uid, email }) => ({
  payload: {
    uid,
    email,
    date: new Date(),
  },
}))
export const SET_USER_INFO = Symbol('SET_USER_INFO_@_APP')
export const setUserInfo = createAction(SET_USER_INFO)

export const LOAD_USER = Symbol('LOAD_USER_@_APP')
export const loadUser = createAction(LOAD_USER)

export const LOAD_CASES = Symbol('LOAD_CASES_@_APP')
export const loadCases = createAction(LOAD_CASES)

// APP EVENTS
export const INIT_APP = Symbol('INIT_APP_@_APP')
export const initApp = createAction(INIT_APP)

export const SET_IS_LOADED = Symbol('SET_IS_LOADED_@_APP')
export const setIsLoaded = createAction(SET_IS_LOADED)

export const SET_CASES = Symbol('SET_CASES_@_APP')
export const setCases = createAction(SET_CASES)

export const SET_STEP_FULFILLED = Symbol('SET_STEP_FULFILLED_@_APP')
export const stepFulfilled = createAction(SET_STEP_FULFILLED)

export const CHANGE_CASES = Symbol('CHANGE_CASES_@_APP')
export const RELOAD_MARKERS = Symbol('RELOAD_MARKERS_@_APP')

export const SET_CURRENT_CASE = Symbol('SET_CURRENT_CASE_@_APP')
export const setCurrentCase = createAction(SET_CURRENT_CASE)

export const SET_CURRENT_LOCATION = Symbol('SET_CURRENT_LOCATION_@_APP')
export const setCurrentLocation = createAction(SET_CURRENT_LOCATION)

// MAP EVENTS
export const SET_MAP = Symbol('SET_MAP_@_APP')
export const setMap = createAction(SET_MAP)

export const JUMP_TO = Symbol('JUMP_TO')
export const jumpTo = createAction(JUMP_TO)

export const FLY_TO = Symbol('FLY_TO')
export const flyTo = createAction(FLY_TO)

export const EASE_TO = Symbol('EASE_TO')
export const easeTo = createAction(EASE_TO)

// MARKER EVENTS
export const ADD_MARKER = Symbol('ADD_MARKER_@_MARKER')
export const addMarker = createAction(ADD_MARKER)

export const CREATE_MARKER_AT_POSITION = 'CREATE_MARKER_AT_POSITION'
export const dndCreateMarker = createAction(CREATE_MARKER_AT_POSITION, (token, visibility = false) => ({ payload: { token, visibility } })) 

export const MOVE_PLAYER_MARKER = 'MOVE_PLAYER_MARKER'
export const dndMovePlayerMarker = createAction(MOVE_PLAYER_MARKER, (uid) => ({ payload: { uid: uid } }))

export const LOAD_MARKERS = Symbol('LOAD_MARKERS')
export const loadMarkers = createAction(LOAD_MARKERS)

export const SET_IS_OVER_MARKER = Symbol('SET_IS_OVER_MARKER')
export const setIsOverMarker = createAction(SET_IS_OVER_MARKER)

export const UPDATE_MARKER = Symbol('UPDATE_MARKER_@_MARKER')
export const updateMarker = createAction(UPDATE_MARKER)

export const DELETE_MARKER = Symbol('DELETE_MARKER_@_MARKER')
export const deleteMarker = createAction(DELETE_MARKER)

export const CLEAR_MARKERS = Symbol('CLEAR_MARKERS_@_MARKER')
export const clearMarkers = createAction(CLEAR_MARKERS)


// TOKENS EVENTS
export const TOGGLE_VISIBILITY = Symbol('TOGGLE_VISIBILITY')
export const toggleVisibility = createAction(TOGGLE_VISIBILITY)

export const KILL = Symbol('KILL')
export const kill = createAction(KILL)

export const DELETE = Symbol('DELETE')
export const deleteToken = createAction(DELETE)

export const CHANGE_SKIN = Symbol('CHANGE_SKIN')
export const changeSkin = createAction(CHANGE_SKIN)

export const CHANGE_WEAPON = Symbol('CHANGE_WEAPON')
export const changeWeapon = createAction(CHANGE_WEAPON)

export const SET_SIZE = Symbol('SET_SIZE')
export const saveSize = createAction(SET_SIZE)
