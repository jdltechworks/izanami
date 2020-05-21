export const handleChange = (type, text) => {
  return {
    type: 'textChange',
    payload: { [type]: text },
  }
}
