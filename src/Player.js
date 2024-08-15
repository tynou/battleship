import Board from './Board';

class Player {
  constructor(type, gameLogic) {
    this.type = type;
    this.board = new Board(document.querySelector(`.board#${type}`), this, gameLogic);
    this.shipHits = [];
  }
}

export default Player;