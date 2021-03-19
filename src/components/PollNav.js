import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PollNav extends Component {
  render() {
    return (
      <div className="poll-nav">
        <NavLink to="unanswered">
          <img alt="tab" src="/images/tabs/unanswered.png" height="23px" />
          <p>Unanswered Questions</p>
        </NavLink>
        <NavLink to="answered">
          <img alt="tab" src="/images/tabs/answered.png" height="23px" />
          <p>Answered Questions</p>
        </NavLink>
      </div>
    );
  }
}

export default PollNav;
