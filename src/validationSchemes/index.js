import * as Yup from 'yup';

export const LoginFormValidationScheme = Yup.object({
  email: Yup.string()
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
      'Please enter valid e-mail'
    )
    .required('Email is required field'),
  password: Yup.string()
    .matches(
      /^[^\s](?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}[^\s]$/gm,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    )
    .required('Password is required field'),
});

export const SignInFormValidationScheme = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(50)
    .required('First name is required field'),
  lastName: Yup.string().min(2).max(50).required('Last name is required field'),
  displayName: Yup.string()
    .matches(
      /^[a-z0-9_-]{5,20}$/gm,
      'Display Name must contain 5-20 small letters, digits allowed'
    )
    .required('Display Name is required field'),
  email: Yup.string()
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
      'Please enter valid e-mail'
    )
    .required('Email is required field'),
  password: Yup.string()
    .matches(
      /^[^\s](?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}[^\s]$/gm,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    )
    .required('Password is required field'),
  passwordConf: Yup.string()
    .oneOf([Yup.ref('password'), null], ' Password Confirmation does not match')
    .required('Password Confirmation is required field'),
});
