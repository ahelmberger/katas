'use strict';

function createMatch() {
  var score1 = 0;
  var score2 = 0;

  var regularScoreNames = ['love', 'fifteen', 'thirty', 'fourty'];

  function getScoreName(score) {
    return regularScoreNames[score] || '';
  }

  function maxScore() {
    return Math.max(score1, score2);
  }

  function minScore() {
    return Math.min(score1, score2);
  }

  function scoreDifference() {
    return maxScore() - minScore();
  }

  function playerWithMaxScore() {
    if (score1 === score2) {
      return 'player 1 and player 2';
    }
    return (score1 > score2) ? 'player 1' : 'player 2';
  }

  function player1Scores() {
    score1 += 1;
  }

  function player2Scores() {
    score2 += 1;
  }

  function gameIsInRegularRange() {
    return maxScore() < 4;
  }

  function getScore() {
    if (gameIsInRegularRange()) {
      return getScoreName(score1) + ' : ' + getScoreName(score2);
    }

    switch (scoreDifference()) {
      case 0: return 'deuce';
      case 1: return 'advantage ' + playerWithMaxScore();
      default: return playerWithMaxScore() + ' wins';
    }
  }

  return {
    player1Scores: player1Scores,
    player2Scores: player2Scores,
    getScore: getScore
  };
}
