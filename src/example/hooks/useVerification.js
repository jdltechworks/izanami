import Izanami from './resources/izanami'
import bindActions from './resources/izanami/bindActions'
import * as verificationActions from './resources/actions/verify'
import * as formActions from './resources/actions/form'

const verificationHook = () => {
  return () => {
    const { state, dispatch } = Izanami.useStore()
    const { verify } = verificationActions
    const { handleChange } = formActions
    const { verify, form } = state
    const actions = bindActions(
      {
        verify,
        handleChange,
      },
      dispatch,
    )
    return { verify, form, ...actions }
  }
}

export default verificationHook()
