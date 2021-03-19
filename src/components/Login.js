import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";
import { handleAddUser } from "../actions/users";
class Login extends Component {
  state = {
    selectedImage: 0,
    firstname: "",
    lastname: "",
    signInPassword: "",
    signupPassword: "",
  };
  handleAvatarChange = (e) => {
    const element = e.target;
    this.setState({ selectedImage: element.value });
  };

  handleInputChange = (e) => {
    const element = e.target;
    this.setState({ [element.name]: element.value });
  };

  handleSignIn = (e) => {
    const { signInPassword } = this.state;
    const selectForm = document.getElementById("users");
    console.log(`User: ${selectForm.value}, Password: ${signInPassword}`);
    if (this.props.formattedUsers.some((u) => u.id === selectForm.value && u.password === signInPassword)) {
      const { dispatch } = this.props;
      dispatch(setAuthedUser(selectForm.value));
    } else {
      alert("Error, wrong password");
      const user = this.props.formattedUsers.filter((u) => u.id === selectForm.value);
      console.log(`User: ${JSON.stringify(user[0])}, Password: ${signInPassword}`);
    }
  };

  malformedInput = (input) => {
    if (!input || input.trim() === "") return true;
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const { selectedImage, firstname, lastname, signupPassword } = this.state;
    const id = (firstname + lastname).toLowerCase();
    const name = `${firstname} ${lastname}`;
    if (selectedImage === 0) {
      alert("Please select an avatar to continue.");
    } else if (this.malformedInput(firstname) || this.malformedInput(lastname) || this.malformedInput(signupPassword)) {
      alert("Your first/last name or password fields can't be empty.");
    } else if (this.props.formattedUsers.some((u) => u.id === id)) {
      alert("User with this identifier already exists. If you already have an account, login from the right, otherwise choose another name.");
    } else {
      const { dispatch } = this.props;
      dispatch(handleAddUser(id, name, signupPassword, selectedImage));
    }
  };

  render() {
    return (
      <div className="login">
        <div className="login-header">
          <p>Welcome To Défi - The (Would You Rather) Game</p>
          <p>Please Sign In Or Sign Up To Continue</p>
        </div>
        <div className="login-content">
          <span id="login-form">
            <p className="login-heading signin">Sign In</p>
            <p>Do you already have an account?</p>
            <p>Choose your username from below</p>
            <select name="users" id="users">
              {this.props.formattedUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <input
              type="password"
              id="user-password"
              className="user-info"
              name="signInPassword"
              placeholder="Your password"
              maxLength="20"
              onChange={this.handleInputChange}
            />
            <button id="sign-in" onClick={this.handleSignIn}>
              Sign In
            </button>
          </span>
          <div className="content-seperator"></div>
          <span id="signup-form">
            <p className="login-heading signup">Register</p>
            <p>You don't have an account?</p>
            <div>
              <input type="text" className="user-info" name="firstname" placeholder="First name" maxLength="20" onChange={this.handleInputChange} />
              <input type="text" className="user-info" name="lastname" placeholder="Last name" maxLength="20" onChange={this.handleInputChange} />
              <input type="password" className="user-info" name="signupPassword" placeholder="Your password" maxLength="20" onChange={this.handleInputChange} />
            </div>
            <label>Pick An Avatar</label>
            <form id="avatar-selector" onSubmit={this.handleSignUp}>
              <input id="avatarOne" type="radio" name="avatars" value="1" onChange={this.handleAvatarChange} />
              <label className="user-avatar" htmlFor="avatarOne"></label>
              <input id="avatarTwo" type="radio" name="avatars" value="2" onChange={this.handleAvatarChange} />
              <label className="user-avatar" htmlFor="avatarTwo"></label>
              <input id="avatarThree" type="radio" name="avatars" value="3" onChange={this.handleAvatarChange} />
              <label className="user-avatar" htmlFor="avatarThree"></label>
              <input id="avatarFour" type="radio" name="avatars" value="4" onChange={this.handleAvatarChange} />
              <label className="user-avatar" htmlFor="avatarFour"></label>
              <input id="avatarFive" type="radio" name="avatars" value="5" onChange={this.handleAvatarChange} />
              <label className="user-avatar" htmlFor="avatarFive"></label>
              <input id="avatarSix" type="radio" name="avatars" value="6" onChange={this.handleAvatarChange} />
              <label className="user-avatar" htmlFor="avatarSix"></label>
              <input type="submit" value="Sign Up" id="sign-up" />
            </form>
          </span>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users, authedUser }) {
  const formattedUsers = Object.values(users).map((user) => {
    return { id: user.id, name: user.name, password: user.password };
  });
  return {
    formattedUsers,
    authedUser,
  };
}
export default withRouter(connect(mapStateToProps)(Login));
