import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
class NewQuestion extends Component {
  state = {
    questionOne: "",
    questionTwo: "",
    redirect: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    const element = e.target;
    this.setState({ [element.id]: element.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { questionOne, questionTwo } = this.state;
    if (questionOne.trim() === "" || questionTwo.trim() === "") {
      alert("One or more questions are empty, please make sure both fields are filled.");
    } else {
      dispatch(handleAddQuestion(questionOne, questionTwo));
      this.setState({ redirect: true });
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="question new-question">
        <div className="new-question-header">
          <p>Create New Question</p>
        </div>
        <div className="new-question-content">
          <img src={`/images/would-you.gif`} alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="questionOne" name="question1" placeholder="Enter your first question" maxLength="70" onChange={this.handleChange} />
            <p>OR</p>
            <input type="text" id="questionTwo" name="question2" placeholder="Enter your second question" maxLength="70" onChange={this.handleChange} />
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
