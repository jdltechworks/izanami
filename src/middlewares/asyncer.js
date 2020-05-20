const asyncer = (dispatch, state) => (action) =>
  typeof action === 'function' ?  action(dispatch, state) : dispatch(action)



export default asyncer

