const { price } = require('../index');

test('it should calculate totals correctly', () => {
  expect(price('')).toBe(0);
  expect(price('A')).toBe(50);
  expect(price('AB')).toBe(80);
  expect(price('CDBA')).toBe(115);
  expect(price('AA')).toBe(100);
  expect(price('AAA')).toBe(130);
  expect(price('AAABB')).toBe(175);
});
