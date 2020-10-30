import React from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { LoginFormValidationScheme as validationScheme } from '../../../validationSchemes';
import Icon from '@mdi/react';
import { mdiFacebook, mdiGoogle } from '@mdi/js';
import styles from './LoginForm.module.css';
import classNames from 'classnames';

const LoginForm = (props) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const submitHabdler = (values, form) => {
    form.resetForm();
  };

  return (
    <>
      <div className={styles.header}>
        <a href="https://www.squadhelp.com/">
          <img
            className={styles.logoImage}
            src="https://www.squadhelp.com/blog/wp-content/uploads/2018/04/Squadhelp_logo_white-transparent.png"
            alt="logoImage"
          />
        </a>

        <a className={styles.loginLink} href="signin">
          Signup
        </a>
      </div>

      <div className={styles.createAnAccountWrapper}>
        <h1 className={styles.createAccountHeader}>LOGIN TO YOUR ACCOUNT</h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={submitHabdler}
      >
        {({ errors, touched }) => (
          <Form className={styles.mainForm}>
            <Field
              className={styles.inputField}
              name="email"
              type="text"
              placeholder="Email address"
            />

            <Field
              className={styles.inputField}
              name="password"
              type="password"
              placeholder="Password"
            />

            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="span"
            />

            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="span"
            />

            <div className={styles.container}>
              <span>
                <Field name="allowSquadhelp" type="checkbox" /> Remember me
              </span>
              <a className={styles.forgotPassword} href="#">
                Forgot password
              </a>
            </div>

            <Field
              className={styles.createAccountBtn}
              type="submit"
              value="Login"
            />

            <a
              href="#"
              className={classNames(
                styles.createAccountBtn,
                styles.signUpFacebookBtn
              )}
            >
              <Icon path={mdiFacebook} size={1} value="Here som link" />
              <a className={styles.signInWith}>Sign up with Facebook</a>
            </a>

            <a
              href="#"
              className={classNames(
                styles.createAccountBtn,
                styles.signUpFacebookBtn,
                styles.signUpGoogleBtn
              )}
            >
              <Icon path={mdiGoogle} size={1} value="Here som link" />
              <a className={styles.signInWith}>Sign up with Google</a>
            </a>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
