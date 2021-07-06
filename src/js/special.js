/* eslint-disable max-len *//* eslint-disable linebreak-style */
import Character from './character';

/* eslint-disable no-unused-expressions */

export default class Special extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPower = 100;
    this.outputAttack = 0;
    this.isStoned = false;
  }

  set attack(range) {
    if (range < 0) throw new Error('Недопустимое расстояние');
    !range || range > 11 ? this.outputAttack = 0 : this.outputAttack = +(this.attackPower * (1.1 - range / 10)).toFixed(0);
    if (this.isStoned && range > 0 && range <= 11) this.outputAttack = +(this.outputAttack - Math.log2(range) * 5).toFixed(0);
    if (this.outputAttack < 0) this.outputAttack = 0;
  }

  get attack() {
    return this.outputAttack;
  }

  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }
}
