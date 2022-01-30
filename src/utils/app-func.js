import { result } from 'lodash'
import { flashErrorMsg } from './flash'

export const buildGetSkin = (skins) => (skinId) => {
  if (skinId) {
    return skins[skinId - 1]
  }

  return skins[0]
}

export const createMiddleware = ({ name, middleware }) => store => next => async (action) => {

  if (middleware.hasOwnProperty(action.type)) {
    let result = null

    try {
      const fallback = await middleware[action.type]({ action, getState: store.getState, dispatch: store.dispatch })

      //result = await next(action)
      //console.log(action.type, result, fallback)

      //if (fallback) {
        //await fallback({ store })
      //}

    } catch (e) {
      flashErrorMsg(`Something wrong append ${name} middleware`, e)
      
      /*if (!result) {
        result = await next(action)
      }*/
    }
  }

  return next(action)// result
}

export const json = (_, oJson) => JSON.stringify(oJson, null, 2)

export const getRealLogin = (login) => {
  if (login.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return login
  }

  return `${login}@i-vestigate.com`
}
