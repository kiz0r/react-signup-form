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
  confirmedPassword: '',
  email: '',
};

const SIGNUP_FORM_REG_EXPS = {
  username: /^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/,
  email: /^.+@.+\.[a-z]{2,3}$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: INITIAL_VALUES.username,
      password: INITIAL_VALUES.password,
      confirmedPassword: INITIAL_VALUES.repeatedPassword,
      email: INITIAL_VALUES.email,
      isUsernameValid: false,
      isConfirmed: false,
      isEmailValid: false,
      isPasswordValid: false,
      isChecked: false,
    };
  }

  handleUsernameChange = ({ target: { value } }) => {
    this.setState({
      username: value,
      isUsernameValid: SIGNUP_FORM_REG_EXPS.username.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: SIGNUP_FORM_REG_EXPS.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: SIGNUP_FORM_REG_EXPS.password.test(value),
    });
  };

  handleConfirmPasswordChange = ({ target: { value } }) => {
    this.setState({
      confirmedPassword: value,
      isConfirmed:
        this.state.password === value &&
        SIGNUP_FORM_REG_EXPS.password.test(value),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // request
  };

  handleChecking = ({ target: { checked } }) => {
    this.setState({ isChecked: checked });
  };

  render() {
    const {
      username,
      email,
      password,
      confirmedPassword,
      isUsernameValid,
      isEmailValid,
      isPasswordValid,
      isConfirmed,
      isCheked,
    } = this.state;

    const usernameClassName = classNames(
      `${formInput}`,
      `${isUsernameValid ? inputValid : inputInvalid}`
    );

    const emailClassName = classNames(
      `${formInput}`,
      `${isEmailValid ? inputValid : inputInvalid}`
    );

    const passwordClassName = classNames(
      `${formInput}`,
      `${isPasswordValid ? inputValid : inputInvalid}`
    );

    const confirmedPassClassName = classNames(
      `${formInput}`,
      `${isConfirmed ? inputValid : inputInvalid}`
    );

    return (
      <div className={formWrapper}>
        <h1 className={formTitle}>Sign Up Form</h1>
        <form action="" className={signUpForm} onSubmit={this.handleSubmit}>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>USERNAME</span>
            <input
              type="text"
              className={usernameClassName}
              placeholder="Username"
              value={username}
              name="username"
              onChange={this.handleUsernameChange}
              autoFocus
              required
            />
          </label>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>PASSWORD</span>
            <input
              type="password"
              className={passwordClassName}
              value={password}
              name="password"
              required
              onChange={this.handlePasswordChange}
            />
          </label>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>CONFIRM PASSWORD</span>
            <input
              type="password"
              className={confirmedPassClassName}
              value={confirmedPassword}
              name="password-confirmation"
              required
              onChange={this.handleConfirmPasswordChange}
            />
          </label>
          <label htmlFor="" className={formLabel}>
            <span className={labelName}>EMAIL ADRESS</span>
            <input
              type="email"
              className={emailClassName}
              name="email"
              value={email}
              placeholder="your-email@mail.com"
              required
              onChange={this.handleEmailChange}
            />
          </label>
          <label htmlFor="" className={(formLabel, agreementBox)}>
            <input
              type="checkbox"
              name="agreement"
              required
              checked={isCheked}
              onChange={this.handleChecking}
            />
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
