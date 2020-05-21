const validationPatterns = {
  verification_code: {
    pattern: '^[0-9]*$',
    required: true,
    value: '',
  },
  email: {
    pattern: '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$',
    required: true,
    value: '',
  },
  name: {
    pattern: '^[A-Za-z0-9 ]*$',
    required: true,
    value: '',
  },
  password: {
    pattern: '^[A-Za-z0-9!]*$',
    required: true,
    value: '',
  },
  password_confirmation: {
    pattern: '^[A-Za-z0-9!]*$',
    required: true,
    value: '',
  },
  phone: {
    pattern: '^[0-9+]*$',
    require: true,
    value: '',
  },
  verification_code: {
    pattern: '^[0-9]*$',
    require: true,
    value: '',
  },
}

export default validationPatterns
