
export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  country: {
    type: 'country',
    color: 'red',
  },
  address: {
    type: 'string',
  },
  phone: {
    type: 'phone',
  },
  email: {
    type: 'email',
    required: true,
    unique: true,
  },
};
