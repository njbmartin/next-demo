import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    client: null,
    server: null,
}

export const actionTypes = {
    SET_SERVER: 'SET_SERVER',
    SET_CLIENT: 'SET_CLIENT'
}

export const setClient = (client) => dispatch => {
    dispatch({
        type: actionTypes.SET_CLIENT,
        client
    })
}

export const setServer = (server) => dispatch => {
    dispatch({
        type: actionTypes.SET_SERVER,
        server,
    })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CLIENT: {
            return {
                ...state,
                client: action.client,
            }
        }
        case actionTypes.SET_SERVER: {
            return {
                ...state,
                server: action.server,
            }
        }
        default: {
            return state
        }
    }
}

export function initStore (state = initialState) {
    return createStore(
      reducer,
      state,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }