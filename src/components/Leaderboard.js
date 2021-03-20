import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Player from "./Player";
class Leaderboard extends Component {
  render() {
    const { players } = this.props;
    return (
      <div className="leaderboard">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    );
  }
}

Leaderboard.propTypes = {
  players: PropTypes.array.isRequired,
};

function mapStateToProps({ users }) {
  // The answers are saved as an object. However, the questions are saved as an array
  // So we need to approach them in different ways to calculate the total score
  const players = Object.values(users)
    .map(
      (player) =>
        Object.assign({}, player, {
          score: Object.keys(player.answers).length + player.questions.length,
        }) // I create a new attribute, call it score and assign it the sum of the points
    )
    .sort((a, b) => b.score - a.score);

  return {
    players,
  };
}

export default connect(mapStateToProps)(Leaderboard);
