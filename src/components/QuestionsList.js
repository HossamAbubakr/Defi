import React, { Component } from "react";

import QuestionsListItem from "./QuestionsListItem.js";

class QuestionsList extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div className="questions-list">
        {questions.length > 0 ? (
          questions.map((question) => <QuestionsListItem key={question.id} question={question} />)
        ) : (
          <p id="no-questions">No Questions Here, Check The Other Tab</p>
        )}
      </div>
    );
  }
}

export default QuestionsList;
