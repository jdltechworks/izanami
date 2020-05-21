import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import api from './resources/api'

export const verify = () => async ({ dispatch, state, navigation, route }) => {
  console.log(navigation)
}
