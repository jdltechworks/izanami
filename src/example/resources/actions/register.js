import api from './resources/api'

export const register = () => {
  return async ({ dispatch, state, navigation, route }) => {
    const { name, email, phone, password, password_confirmation } = state.form
    try {
      const { data } = await api.post('/api/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        password_confirmation: password_confirmation.value,
      })

      // navigation.navigate('Verify', { userId: data.user.id })
    } catch (error) {
      console.log(JSON.stringify(error))
    }
  }
}
