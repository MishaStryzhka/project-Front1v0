import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Field is a required')
    .email('Enter a valid Email'),
  password: Yup.string()
    .required('Field is a required')
    .min(8, 'Password must be at least 6 characters')
    .max(16, 'Password must be less at 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
    ),
});
