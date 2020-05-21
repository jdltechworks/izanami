import axios from 'axios'
import { API_URL } from 'react-native-dotenv'

axios.defaults.baseURL = API_URL

export default axios
