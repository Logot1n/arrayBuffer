import { Character, Magician, Daemon } from '../js/Character';
import { ArrayBufferConverter, getBuffer } from '../js/arrayBuffer';

describe('Character', () => {
  test('check getAttack', () => {
    const character = new Character(100);
    character.attack = 3;
    expect(character.attack).toBe(80);
  });

  test('check getAttack Magician with stoned', () => {
    const magician = new Magician(150);
    magician.stoned = true;
    magician.attack = 4;
    expect(magician.attack).toBe(95);
  });

  test('check getAttack Daemon without stoned', () => {
    const daemon = new Daemon(20);
    daemon.attack = 4;
    expect(daemon.attack).toBe(14);
  });

  test('return stoned', () => {
    const character = new Character(100);
    character.stoned = true;
    expect(character.stoned).toBe(true);
  });

  test('check error for distanceFromTarget', () => {
    const character = new Character(10);
    expect(() => { character.attack = -1; }).toThrowError('Расстояние не может быть больше или равно 0');
  })
});

describe('ArrayBufferConverter', () => {
  test('check toString', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('check toString with param empty', () => {
    const converter = new ArrayBufferConverter();
    expect(converter.toString()).toBe('Пустая строка');
  });
});
