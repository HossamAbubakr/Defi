import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class QuestionItem extends Component {
  render() {
    const { user } = this.props;
    const { id, optionOne, type } = this.props.question;
    return (
      <div className="question">
        <div className="question-header">
          <p>{user.name} Asks</p>
        </div>
        <div className="item-content poll-content">
          <div className="content-image">
            <img alt="avatar" src={`/images/avatars/${user.avatarURL}.png`} />
          </div>
          <div className="content-seperator" />
          <div className="content-text">
            <p className="would-you">Would You Rather</p>
            <label>{optionOne.text}</label>

            <NavLink to={`/questions/${id}`}>
              <button className="voteBtn">{type === "unanswered" ? "View And Vote" : "View Answer"}</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }, { question }) {
  const user = users[question.author];
  return {
    user,
  };
}

export default connect(mapStateToProps)(QuestionItem);
