import Player from './Player';
import drag from './Drag';

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const draggableShips = document.querySelector('.draggable-ships');
const startBtn = document.querySelector('.start');
const randomiseBtn = document.querySelector('.randomise')

class GameLogic {
  constructor() {
    this.type = 'bot';
    this.player1 = new Player('you', this);
    this.player2 = new Player('bot', this);
    this.turn = this.player1;
    this.availableShips = undefined;

    this.canFire = true;

    this.reset();

    randomiseBtn.addEventListener('click', () => {
      this.availableShips  = {'4': 0, '3': 0, '2': 0, '1': 0};
      this.updateShipCount();
      this.player1.board.reset();
      this.player1.board.populate();
      this.player1.board.renderShips();
    });

    startBtn.addEventListener('click', () => {
      if (Object.values(this.availableShips).some((value) => value !== 0)) return;

      draggableShips.classList.add('invisible');
      randomiseBtn.classList.add('invisible');
      startBtn.classList.add('invisible');
      this.player2.board.element.classList.remove('invisible');
      this.player1.board.hide();
    })

    document.querySelectorAll('.d-ship').forEach((ship) => {
      ship.addEventListener('mousedown', (e) => {
        if (this.availableShips[ship.dataset.size] <= 0) return;

        const shipClone = ship.cloneNode(true);
        document.body.appendChild(shipClone);
        drag(
          shipClone,
          e,
          (endE, rot) => {
            const overlaps = document.elementsFromPoint(endE.pageX, endE.pageY);
            const cell = overlaps.find((el) => el.className === 'board-cell');
            const curX = cell ? parseInt(cell.dataset.x) : undefined;
            const curY = cell ? parseInt(cell.dataset.y) : undefined;

            if (cell && this.player1.board.isPosValid(curX, curY, parseInt(ship.dataset.size), rot)) {
              this.player1.board.placeShip(curX, curY, parseInt(ship.dataset.size), rot);
              this.player1.board.renderShips();
              this.availableShips[ship.dataset.size] -= 1;
              this.updateShipCount();
            }
            document.body.removeChild(shipClone);
          },
        );
      })
    });
  }

  reset() {
    this.availableShips  = {'4': 1, '3': 2, '2': 3, '1': 4};
    this.updateShipCount();

    this.player1.board.reset();
    this.player2.board.reset();
    this.player2.board.populate();
    this.turn = this.player1;

    this.canFire = true;

    this.player1.board.renderShips();
    this.player2.board.renderShips(true);

    this.getEnemy().board.show();

    this.turn.board.show();
    draggableShips.classList.remove('invisible');
    randomiseBtn.classList.remove('invisible');
    startBtn.classList.remove('invisible');
    this.player2.board.element.classList.add('invisible');
  }

  updateShipCount() {
    for (let size in this.availableShips) {
      document.querySelector(`[data-size="${size}"]`).parentNode.querySelector('.amount').textContent = `x${this.availableShips[size]}`;
    }
  }

  getEnemy() {
    return this.turn === this.player1 ? this.player2 : this.player1;
  }

  getBotMove() {
    const grid = this.player1.board.grid;
    const moves = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (grid[y][x] === false) continue;
        if (grid[y][x] !== null && grid[y][x].isHit(x, y)) continue;
        moves.push([x, y]);
      }
    }
    return moves[Math.floor(Math.random()*moves.length)];
  }

  botMove() {
    const pos = this.getBotMove();
    this.fireAt(pos[0], pos[1]);
  }

  fireAt(x, y) {
    if (!this.canFire) return;

    this.turn.board.hide();

    this.canFire = false;

    const board = this.turn === this.player1 ? this.player2.board : this.player1.board;

    const ship = board.grid[y][x];
    let hit = false;
    if (ship !== null) {
      ship.hit(x, y);
      hit = true;
      if (ship.isDead()) {
        board.clearAround(ship);
      }
      this.turn.shipHits.push([x, y]);
    } else {
      board.grid[y][x] = false;
    }

    if (board.isDead()) {
      this.victory();
      return;
    }
      

    if (!hit) this.turn = this.turn === this.player1 ? this.player2 : this.player1;
    this.turn.board.hide();
    this.getEnemy().board.show();

    board.renderShips(board.player !== this.player1);

    if (this.turn === this.player2) {
      sleep(Math.floor(Math.max(Math.random(), 0.5)*200)).then(() => {
        this.canFire = true;
        this.botMove();
      });
    } else {
      this.canFire = true
    }
  }

  victory() {
    console.log(this.turn.type, 'won!');
    this.reset();
  }
}

export default GameLogic;