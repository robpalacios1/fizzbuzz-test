const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  test('should print 1 if they receive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  })

  test('should print fizz if they receive 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  })

  test('should print fizz if the receive a multiple of 3', () => {
    const expexted = 'fizz';
    const result = fizzbuzz(6);
    expect(expexted).toBe(result);
  })

  test('should print buzz if they receive  5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  })

  test('should print buzz if they receive multiple of  5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  })
});