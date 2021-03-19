import React from "react";

export default function Player(props) {
  const { name, answers, questions, score, avatarURL } = props.player;
  return (
    <div className="player">
      <div className="ribbon">
        <img alt="trophy" />
      </div>
      <div className="player-content">
        <div className="player-image">
          <img alt="avatar" src={`/images/avatars/${avatarURL}.png`} />
        </div>
        <div className="content-text">
          <p className="player-name">{name}</p>
          <div className="player-stats">
            <p>Number Of Questions:</p>
            <p>{questions.length}</p>
          </div>
          <div className="player-stats">
            <p>Number Of Answers:</p>
            <p>{Object.keys(answers).length}</p>
          </div>
        </div>
        <div className="total-score">
          <div className="total-score-header">Score</div>
          <div className="score-circle">{score}</div>
        </div>
      </div>
    </div>
  );
}
