import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingBar from "react-redux-loading";
import AppNav from "./AppNav";
import Poll from "./Poll";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";
import Login from "./Login";
import Footer from "./Footer";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.loading ? null : (
          <React.Fragment>
            <LoadingBar />
            <AppNav />
            <div className="app-content">
              {this.props.loggedOut ? (
                <Login />
              ) : (
                <Switch>
                  <Route exact path="/">
                    <Redirect to="poll" />
                  </Route>
                  <Route path="/poll">
                    <Poll />
                  </Route>
                  <Route path="/questions/:questiondID">
                    <Question />
                  </Route>
                  <Route path="/leaderboard">
                    <Leaderboard />
                  </Route>
                  <Route path="/add">
                    <NewQuestion />
                  </Route>
                  <Route path="/not-found">
                    <NotFound />
                  </Route>
                </Switch>
              )}
              ;
            </div>
            <Footer />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedOut: PropTypes.bool.isRequired,
};

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    loggedOut: authedUser === "LOGGED_OUT",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
