/* global createMatch */
'use strict';

describe('Given a match', function () {
  var match;

  beforeEach(function () {
    match = createMatch();
  });

  describe('when no player has scored yet', function () {
    it('score should be love : love', function () {
      var score = match.getScore();
      expect(score).toBe('love : love');
    });
  });

  describe('when player 1 has scored once', function () {
    beforeEach(function () {
      match.player1Scores();
    });
    it('score should be fifteen : love', function () {
      var score = match.getScore();
      expect(score).toBe('fifteen : love');
    });
  });

  describe('when player 2 has scored once', function () {
    beforeEach(function () {
      match.player2Scores();
    });
    it('score should be love : fifteen', function () {
      var score = match.getScore();
      expect(score).toBe('love : fifteen');
    });
  });

  describe('when player 1 has scored twice', function () {
    beforeEach(function () {
      match.player1Scores();
      match.player1Scores();
    });
    it('score should be thirty : love', function () {
      var score = match.getScore();
      expect(score).toBe('thirty : love');
    });
  });

  describe('when player 1 has scored four times', function () {
    beforeEach(function () {
      match.player1Scores();
      match.player1Scores();
      match.player1Scores();
      match.player1Scores();
    });

    describe('and player 2 has scored just two times', function () {
      beforeEach(function () {
        match.player2Scores();
        match.player2Scores();
      });
      it('player 1 should be the winner', function () {
        var score = match.getScore();
        expect(score).toBe('player 1 wins');
      });
    });

    describe('and player 2 has scored three times', function () {
      beforeEach(function () {
        match.player2Scores();
        match.player2Scores();
        match.player2Scores();
      });
      it('player 1 should have advantage', function () {
        var score = match.getScore();
        expect(score).toBe('advantage player 1');
      });
    });

    describe('and player 2 has scored four times', function () {
      beforeEach(function () {
        match.player2Scores();
        match.player2Scores();
        match.player2Scores();
        match.player2Scores();
      });
      it('players should have reached deuce', function () {
        var score = match.getScore();
        expect(score).toBe('deuce');
      });
    });

  });

});
