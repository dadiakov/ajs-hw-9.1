import Character from '../character';
import Magician from '../magician';
import Daemon from '../daemon';

test('Create chars', () => {
  const zombie = new Character('Zombie', 'Zombie');
  const swordsman = new Character('Swordsman', 'Swordsman');
  const bowman = new Character('Bowman', 'Bowman');
  const undead = new Character('Undead', 'Undead');

  expect(zombie.name).toBe('Zombie');
  expect(swordsman.name).toBe('Swordsman');
  expect(bowman.name).toBe('Bowman');
  expect(undead.name).toBe('Undead');
});

test('Check attack', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 2;
  expect(daemon.attack).toBe(90);
});

test('Check attack with stoned', () => {
  const magician = new Magician('Magician');
  magician.stoned = true;
  expect(magician.stoned).toBeTruthy();
  magician.attack = 2;
  expect(magician.attack).toBe(85);
});

test('throw error on create', () => {
  expect(() => new Character('Zom', 'Zom')).toThrow();
});

test('throw error on distance < 0', () => {
  const daemon = new Daemon('Daemon');
  // eslint-disable-next-line no-return-assign
  expect(() => daemon.attack = -1).toThrow();
});

test('attack = 0 on 0 or > 11 distance', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 0;
  expect(daemon.attack).toBe(0);
  daemon.attack = 12;
  expect(daemon.attack).toBe(0);
});

test('far attack with stoned to be 0', () => {
  const magician = new Magician('Magician');
  magician.stoned = true;
  magician.attack = 10;
  expect(magician.attack).toBe(0);
});
