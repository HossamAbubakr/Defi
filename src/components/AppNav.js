import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
class AppNav extends Component {
  handleCLick = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser("LOGGED_OUT"));
    this.setState({ dropDown: false });
  };
  render() {
    const { loggedOut, user } = this.props;
    return (
      <div className="tab-navigation">
        <ul className="tab-menu">
          <li id="logo">
            <img alt="logo" src="/images/logo.png" />
          </li>
          <NavLink to="/poll">
            <img alt="tab" src="/images/tabs/home.png" />
            Home
          </NavLink>
          <NavLink to="/add">
            <img alt="tab" src="/images/tabs/question.png" />
            New Question
          </NavLink>
          <NavLink to="/leaderboard">
            <img alt="tab" src="/images/tabs/leaderboard.png" />
            Leaderboard
          </NavLink>
          <li id="tab-user">
            Hello, {loggedOut ? "Please Login" : user.name}
            <img alt="avatar" src={loggedOut ? "/images/avatars/0.png" : `/images/avatars/${user.avatarURL}.png`} /> {!loggedOut && "▾"}
            <div className={loggedOut ? "dropdown-hidden" : "dropdown-content"}>
              <p onClick={this.handleCLick}>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

AppNav.propTypes = {
  user: PropTypes.object,
  loggedOut: PropTypes.bool.isRequired,
};

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  let loggedOut = false;
  if (authedUser === "LOGGED_OUT") {
    loggedOut = true;
  }
  return {
    user,
    loggedOut,
  };
}

export default connect(mapStateToProps)(AppNav);
