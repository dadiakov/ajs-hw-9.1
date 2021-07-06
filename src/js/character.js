/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
    // eslint-disable-next-line no-mixed-operators
    if (this.name.length < 2 || this.name.length > 10 || this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Введены некорректные данные');
    }
    if (type === 'Bowman') {
      this.attackRate = 25;
      this.defenceRate = 25;
    }
    if (type === 'Swordsman') {
      this.attackRate = 40;
      this.defenceRate = 10;
    }
    if (type === 'Magician') {
      this.attackRate = 10;
      this.defenceRate = 40;
    }
    if (type === 'Undead') {
      this.attackRate = 25;
      this.defenceRate = 25;
    }
    if (type === 'Zombie') {
      this.attackRate = 40;
      this.defenceRate = 10;
    }
    if (type === 'Daemon') {
      this.attackRate = 10;
      this.defenceRate = 40;
    }
  }
}
