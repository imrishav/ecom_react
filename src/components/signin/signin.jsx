import React, { Component } from "react";

import FormInput from "../form-input/formInput";
import Button from "../button/button";
import { connect } from "react-redux";
import { testMeReducer } from "../../redux/testMe/actions";

import { authentication } from "../../firebase/firebase";
import { googleSignInStart, emailSignInStart } from "../../redux/user/actions";

import "./signin.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    console.log("password", password);

    emailSignInStart(email, password);
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>Already Have A account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button type="submit" value="Sign In">
              Sign In
            </Button>
            <Button type="button" onClick={googleSignInStart} isGoogle>
              Sign In with Google
            </Button>
          </div>
        </form>
        <Button onClick={() => this.props.changeDispatch("rishav")}>
          Test
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ user, test }) => {
  console.log(test, "userState");
};

const mapDispatchToProps = (dispatch) => ({
  changeDispatch: (test) => dispatch(testMeReducer(test)),
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
