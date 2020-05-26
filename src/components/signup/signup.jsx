import React from "react";
import { connect } from "react-redux";

import Input from "../form-input/formInput";
import Button from "../button/button";
import "./signup.scss";

import { authentication, createUserProfileDoc } from "../../firebase/firebase";

import { signUpStart, signUpStartLocal } from "../../redux/user/actions";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    const { signUp, signUpLocal } = this.props;
    signUpLocal({ email, password, displayName, confirmPassword });
  };

  handleChange = (eve) => {
    const { name, value } = eve.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Not Have A account</h2>
        <span>Signup with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

const mapD = (dispatch) => ({
  signUp: (userCredentials) => dispatch(signUpStart(userCredentials)),
  signUpLocal: (userCredentials) => dispatch(signUpStartLocal(userCredentials)),
});

export default connect(null, mapD)(Signup);
