import React, { Component } from "react";

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length > 3 ? "" : "Username must be at least 3 characters";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length > 5 ? "" : "Password must be at least 6 characters";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          this.state.password === value
            ? ""
            : "Password2 is required to be same";
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };

  buttonValidation = (username, email, password, confirmPassword) => {
    if (username) return false;
    if (email) return false;
    if (password) return false;
    if (confirmPassword) return false;

    return true;
  };
  render() {
    let { username, email, password, confirmPassword } = this.state.errors;
    return (
      <div className="validation-form-container">
        <h1 className="registration-title">Register With Us</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            onChange={this.handleChange}
            className={username && "error"}
          />
          <span>{username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
            className={email && "error"}
          />
          <span>{email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.handleChange}
            className={password && "error"}
          />
          <span>{password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="EnterConfirm Password"
            onChange={this.handleChange}
            className={confirmPassword && "error"}
          />
          <span>{confirmPassword}</span>
        </div>
        <div className="form-group">
          <input type="submit" className="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default FormValidation;
