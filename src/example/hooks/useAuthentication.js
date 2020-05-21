import Izanami from './resources/izanami'
import bindActions from './resources/izanami/bindActions'
import * as authActions from './resources/actions/auth'
import * as formActions from './resources/actions/form'

const authenticationHook = () => {
  return () => {
    const { state, dispatch } = Izanami.useStore()
    const { authenticate, getToken } = authActions
    const { handleChange } = formActions
    const { auth, form } = state
    const actions = bindActions(
      {
        authenticate,
        getToken,
        handleChange,
      },
      dispatch,
    )
    return { auth, form, ...actions }
  }
}

export default authenticationHook()
