import React from 'react';
import { Form, Field, Formik, ErrorMessage, validateYupSchema } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { LoginFormValidationScheme as validationScheme } from './LoginFormValidationScheme';

import reset from '../SignInForm/reset.css'; // CHANGE IT LATER
import styles from './LoginForm.module.css';
import Icon from '@mdi/react';
import { mdiFacebook, mdiGoogle } from '@mdi/js';

const submitHabdler = (values, form) => {
  form.resetForm();
};

const LoginForm = (props) => {
  const initialValues = {
    email: '',
    password: '',
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

            <a href="#" className={styles.signUpFacebookBtn}>
              <Icon path={mdiFacebook} size={1} value="Here som link" />
              <a className={styles.signInWith}>Sign up with Facebook</a>
            </a>

            <a href="#" className={styles.signUpGoogleBtn}>
              <Icon path={mdiGoogle} size={1} value="Here som link" />
              <a className={styles.signInWith}>Sign up with Facebook</a>
            </a>

            {/* <div>
                <div className={styles.row}>
                  <Field
                    className={styles.inputField}
                    name="firstName"
                    type="text"
                    placeholder="First name"
                  />
  
                  <Field
                    className={styles.inputField}
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
  
                <div className={styles.errorMessageContainer}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="firstName"
                    component="span"
                  />
  
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="lastName"
                    component="span"
                  />
                </div>
  
                <div className={styles.row}>
                  <Field
                    className={styles.inputField}
                    name="displayName"
                    type="text"
                    placeholder="Display Name"
                  />
                  <Field
                    className={styles.inputField}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
  
                <div className={styles.errorMessageContainer}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="displayName"
                    component="span"
                  />
  
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="password"
                    component="span"
                  />
                </div>
  
                <div className={styles.row}>
                  <Field
                    className={styles.inputField}
                    name="email"
                    type="text"
                    placeholder="Email Address"
                  />
                  <Field
                    className={styles.inputField}
                    name="passwordConf"
                    type="password"
                    placeholder="Password Confirmation"
                  />
                </div>
  
                <div className={styles.errorMessageContainer}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="email"
                    component="span"
                  />
  
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="passwordConf"
                    component="span"
                  />
                </div>
              </div>
              <label className={styles.radioField} for="joinAsBayer">
                <input name="joinAs" type="radio" /> <span>Join As a Buyer</span>
                <p className={styles.radioInfo}>
                  I am looking for a Name, Logo or Tagline for my business, brand
                  or product.
                </p>
              </label>
  
              <label className={styles.radioField} for="joinAsSeller">
                <input name="joinAs" type="radio" /> Join As a Creative or
                Marketplace Seller
                <p className={styles.radioInfo}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </p>
              </label>
  
              <label className={styles.checkboxField}>
                <Field name="allowSquadhelp" type="checkbox" /> Allow Squadhelp to
                send marketing/promotional offers from time to time
              </label>
  
              <Field
                className={styles.createAccountBtn}
                type="submit"
                value="Create account"
              />
  
              <span className={styles.termsOfService}>
                <p>
                  By clicking this button, you agree to our{' '}
                  <a className={styles.termsOfServiceLink} href="#">
                    Terms of Service
                  </a>{' '}
                </p>
              </span>
  
              <a href="#" className={styles.signUpFacebookBtn}>
                <Icon path={mdiFacebook} size={1} value="Here som link" />
                <a className={styles.signInWith}>Sign up with Facebook</a>
              </a>
  
              <a href="#" className={styles.signUpGoogleBtn}>
                <Icon path={mdiGoogle} size={1} value="Here som link" />
                <a className={styles.signInWith}>Sign up with Facebook</a>
              </a> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
