window.store = {
  current: {},
  trace: [],
  states: [],
}

const debugStore = store => next => action => {

  if (process.env.NODE_ENV === 'development') {
    const state = store.getState()
    window.store = {
      current: state,
      trace: [
        ...window.store.trace,
        action,
      ],
      states: [
        ...window.store.states,
        state,
      ]
    }
  }

  return next(action)
}

export default debugStore
