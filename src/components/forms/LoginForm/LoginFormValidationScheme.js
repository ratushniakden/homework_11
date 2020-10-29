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
