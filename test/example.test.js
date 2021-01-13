import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('function should take in (5, 6) and return -1', (expect) => {
    const expected = -1;
    const actual = compareNumbers(5, 6);

    expect.equal(actual, expected);
});

test('function should take in (6, 5) and return 1', (expect) => {
    const expected = 1;
    const actual = compareNumbers(6, 5);

    expect.equal(actual, expected);
});

test('function should take in (5, 5) and return 0', (expect) => {
    const expected = 0;
    const actual = compareNumbers(5, 5);

    expect.equal(actual, expected);
});

