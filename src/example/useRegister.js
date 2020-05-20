import Izanami from 'resources/izanami'
import bindActions from 'resources/izanami/bindActions'
import * as registerActions from 'resources/actions/register'
import * as formActions from 'resources/actions/form'

const registrationHook = () => {
  return () => {
    const { state, dispatch } = Izanami.useStore()
    const { register } = registerActions
    const { handleChange } = formActions
    const { auth, form } = state
    const actions = bindActions(
      {
        register,
        handleChange,
      },
      dispatch,
    )
    return { auth, form, ...actions }
  }
}

export default registrationHook()
