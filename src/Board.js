import Ship from './Ship';
import drag from './Drag';

const sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

class Board {
  constructor(element, player, gameLogic) {
    this.element = element;
    this.player = player;
    this.grid = [...Array(10)].map(() => Array(10).fill(null));
    this.ships = [];

    // this.populate();
    // console.log(this.grid);

    for (let y = 0; y < 10; y++) {
      const row = document.createElement('tr');
      row.className = 'board-row';
      this.element.querySelector('tbody').append(row);

      for (let x = 0; x < 10; x++) {
        const td = document.createElement('td');
        td.className = 'board-element';
        row.append(td);

        const cell = document.createElement('div');
        cell.className = 'board-cell';
        cell.dataset.x = x;
        cell.dataset.y = y;
        td.append(cell);

        cell.addEventListener('click', () => {
          if (gameLogic.turn === this.player) return;
          if (this.grid[y][x] === false) return;
          if (this.grid[y][x] !== null && this.grid[y][x].isHit(x, y)) return;
          gameLogic.fireAt(x, y);
        });

        cell.addEventListener('mousedown', (e) => {
          if (player.type !== 'you') return;

          const ship = this.grid[y][x];
          if (ship === null || ship === false) return;

          this.setTo(ship.pos[0], ship.pos[1], ship.size, ship.rotated, null);
          this.renderShips();

          const shipClone = document.querySelector(`.d-ship.s${ship.size}`).cloneNode(true);
          document.body.appendChild(shipClone);
          drag(
            shipClone,
            e,
            (endE, rot) => {
              const overlaps = document.elementsFromPoint(endE.pageX, endE.pageY);
              const cell = overlaps.find((el) => el.className === 'board-cell');
              const curX = cell ? parseInt(cell.dataset.x) : undefined;
              const curY = cell ? parseInt(cell.dataset.y) : undefined;

              if (cell && this.isPosValid(curX, curY, ship.size, rot)) {
                this.placeShip(curX, curY, ship.size, rot, ship);
                ship.pos = [curX, curY];
                ship.rotated = rot;
              } else {
                this.placeShip(ship.pos[0], ship.pos[1], ship.size, ship.rotated, ship);
              }
              this.renderShips();
              document.body.removeChild(shipClone);
            },
            ship.rotated,
          );
        })
      }
    }
  }

  reset() {
    this.grid = [...Array(10)].map(() => Array(10).fill(null));
    this.ships = [];
    // this.populate();
  }

  show() {
    this.element.querySelector('.battlefield').classList.add("active");
  }

  hide() {
    this.element.querySelector('.battlefield').classList.remove("active");
  }

  clearAround(ship) {
    const shipParts = [];
    for (let i = 0; i < ship.size; i++) {
      shipParts.push([ship.rotated ? ship.pos[0] : ship.pos[0] + i, ship.rotated ? ship.pos[1] + i : ship.pos[1]]);
    }
    shipParts.forEach((part) => {
      const adjacent = this.getAdjacent(part[0], part[1]);
      adjacent.forEach((pos) => {
        if (this.grid[pos[1]][pos[0]] === null) this.grid[pos[1]][pos[0]] = false;
      });
    });
  }

  setTo(x, y, size, rotated, to) {
    for (let i = 0; i < size; i++) {
      this.grid[rotated ? y + i : y][rotated ? x : x + i] = to;
    }
  }

  placeShip(x, y, size, rotated, oldShip) {
    const ship = oldShip || new Ship(x, y, size, rotated);
    this.setTo(x, y, size, rotated, ship);
    this.ships.push(ship);
  }

  isPosValid(x, y, size, rotated) {
    if (!rotated && x + size - 1 > 9) return false;
    if (rotated && y + size - 1 > 9) return false;
    for (let i = 0; i < size; i++) {
      const xNew = rotated ? x : x + i;
      const yNew = rotated ? y + i : y;
      if (this.grid[yNew][xNew] !== null) return false;
      if (!this.getAdjacent(xNew, yNew).every((pos) => this.grid[pos[1]][pos[0]] === null)) return false;
    }
    return true;
  }

  getAdjacent(x, y) {
    let posList = [];
    for (let yo of [-1, 0, 1]) {
      for (let xo of [-1, 0, 1]) {
        if (x + xo < 0 || x + xo > 9 || y + yo < 0 || y + yo > 9 || (xo === 0 && yo === 0)) continue;
        posList.push([x + xo, y + yo]);
      }
    }
    return posList;
  }

  populate() {
    sizes.forEach((size) => {
      let pos = null;
      let rotated = false;
      while (pos === null || !this.isPosValid(pos[0], pos[1], size, rotated)) {
        pos = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
        rotated = Math.random() < 0.6 ? true : false;
      }
      this.placeShip(pos[0], pos[1], size, rotated);
    });
  }

  renderShips(hidden = false) {
    //hidden = false;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const ship = this.grid[y][x];
        const cell = this.element.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        cell.className = 'board-cell';
        if (ship === false) {
          cell.classList.add('miss');
        } else if (ship !== null) {
          if (!hidden) cell.classList.add('ship');
          if (ship.isHit(x, y)) cell.classList.add('ship-hit');
        }
      }
    }
  }

  isDead() {
    return this.ships.every((ship) => ship.isDead());
  }
}

export default Board;