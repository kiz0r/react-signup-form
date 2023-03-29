import { Component } from 'react';
import classNames from 'classnames';

import styles from './SignUpForm.module.css';
const {
  formWrapper,
  formTitle,
  signUpForm,
  formLabel,
  agreementBox,
  labelName,
  formInput,
  inputValid,
  inputInvalid,
  submitBtn,
  breakLine,
} = styles;

const INITIAL_VALUES = {
  username: '',
  password: '',
  repeatedPassword: '',
  email: '',
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: INITIAL_VALUES.username,
      password: INITIAL_VALUES.password,
      repeatedPassword: INITIAL_VALUES.repeatedPassword,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      isPasswordValid: false,
    };
  }

  render() {
    const { isEmailValid, isPasswordValid } = this.state;

    const emailClassName = classNames(
      `${formInput}`,
      `${isEmailValid ? inputValid : inputInvalid}`
    );

    return (
      <div className={formWrapper}>
        <h1 className={formTitle}>Sing Up Form</h1>
        <form action="" className={signUpForm}>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>USERNAME</span>
            <input
              type="text"
              className={formInput}
              placeholder="Username"
              name="username"
              autoFocus
              required
            />
          </label>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>PASSWORD</span>
            <input
              type="password"
              className={formInput}
              name="password"
              required
            />
          </label>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>CONFIRM PASSWORD</span>
            <input
              type="password"
              className={formInput}
              name="password-confirmation"
              required
            />
          </label>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>EMAIL ADRESS</span>
            <input
              type="email"
              className={emailClassName}
              name="email"
              placeholder="your-email@mail.com"
              required
            />
          </label>
          <label htmlFor="" className={(formLabel, agreementBox)}>
            <input type="checkbox" name="agreement" required />
            <span className={labelName}>
              I agree with all the rules of this service
            </span>
          </label>

          <div className={breakLine}></div>

          <button type="submit" className={submitBtn}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
