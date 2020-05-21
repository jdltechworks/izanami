import api from './resources/api'
import storage from '@react-native-community/async-storage'


export const authenticate = () => {
  return async (dispatch, state, navigation, route) => {
    console.log('bahaw ', navigation, route)
  }
}

export const getToken = () => async (dispatch, state, navigation, route) => {
  const value = await storage.getItem('token')
  value && dispatch({ type: 'loggedIn', payload: value })
}
