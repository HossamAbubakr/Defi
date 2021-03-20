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
    this.props.dispatch(handleInitialData());
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
                  {/* My first thought was to force the user to navigate to the login page if they are logged out then take them back to the page 
                they were in once they finished logging in but it wasn't reliable so instead I will do a conditional rendering of the login page
                <Route path="/login">
                  <Login />
                </Route>
                {this.props.loggedOut && <Redirect to="/login" />}*/}
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

export default connect(mapStateToProps)(App);
