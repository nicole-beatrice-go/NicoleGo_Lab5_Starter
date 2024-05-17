// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('match phone numbers', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});
test('match phone numbers', () => {
  expect(isPhoneNumber('(987)654-3210')).toBe(true);
});
test('match phone numbers', () => {
  expect(isPhoneNumber('abcdefg')).toBe(false);
});
test('match phone numbers', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('match valid emails', () => {
  expect(isEmail('nbgo@ucsd.edu').toBe(true));
});

test('match valid emails', () => {
  expect(isEmail('nicolestop24@gmail.com').toBe(true));
});

test('match valid emails', () => {
  expect(isEmail('notAnEmail').toBe(false));
});

test('match valid emails', () => {
  expect(isEmail('123').toBe(false));
});

test('match strong password', () => {
  expect(isStrongPassword('aABCDE').toBe(true));
});

test('match strong password', () => {
  expect(isStrongPassword('a123_BCdE').toBe(true));
});

test('match strong password', () => {
  expect(isStrongPassword('1').toBe(false));
});

test('match strong password', () => {
  expect(isStrongPassword('1abc').toBe(false));
});

test('match valid date', () => {
  expect(isDate('2/4/2004'), true);
});

test('match valid date', () => {
  expect(isDate('12/14/2024'), true);
});

test('match valid date', () => {
  expect(isDate('2/4/24'), false);
});

test('match valid date', () => {
  expect(isDate('yippeeyay'), false);
});

test('valid hex color', () => {
  expect(isHexColor('F0F'), true)
});

test('valid hex color', () => {
  expect(isHexColor('FFF2EF'), true)
});

test('valid hex color', () => {
  expect(isHexColor('abcde'), false)
});

test('valid hex color', () => {
  expect(isHexColor('FFFFFFFFFF'), false)
});

