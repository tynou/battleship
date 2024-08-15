class Ship {
  constructor(x, y, size, rotated) {
    this.pos = [x, y];
    this.hits = Array(size).fill(false);
    this.rotated = rotated;
    this.size = size;
  }

  hit(x, y) {
    this.hits[this.rotated ? y - this.pos[1] : x - this.pos[0]] = true;
  }

  isHit(x, y) {
    return this.hits[this.rotated ? y - this.pos[1] : x - this.pos[0]];
  }

  isDead() {
    return this.hits.every((hit) => hit);
  }
}

export default Ship;