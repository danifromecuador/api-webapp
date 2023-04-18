// const sum = require('./sum');
import { sum, subtraction } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 4  to equal -1', () => {
  expect(subtraction(3, 4)).toBe(-1);
});