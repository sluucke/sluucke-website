export const validationAuthenticateUser = {
  email: {
    type: 'email',
    required: 'Email is required',
  },
  password: {
    required: 'Password is required',
    min: 6,
    max: 20,
  },
};
export const validationCreatePost = {
  title: {
    type: 'string',
    required: 'Title is required',
    min: 3,
    max: 20,
  },
  content: {
    required: 'Content is required',
  },
  slug: {
    type: 'string',
    required: 'Slug is required',
    min: 3,
    max: 20,
  },
  short_description: {
    type: 'string',
    required: 'Short description is required',
    min: 3,
    max: 25,
  },
  time_to_read: {
    type: 'string',
    required: 'Time to read is required',
    min: 1,
    max: 2,
  },
};
