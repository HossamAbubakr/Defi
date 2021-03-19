import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    const { user } = this.props;
    const { answers, id, questions } = user;
    return (
      <div>
        <p>{`User: ${id},  Answers: ${JSON.stringify(answers)}, Questions: ${JSON.stringify(questions)}`}</p>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const user = users[id];

  return {
    authedUser,
    user,
    questions,
  };
}
export default connect(mapStateToProps)(User);
