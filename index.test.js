const { convert } = require('./logic');


// test if conversion occurs correctly to 2dp
test('converts bytes to kilobytes correctly with 2dp', () => {
  expect(convert(1024.435, 'bytes', 'kilobytes')).toBe(1.00);
});

// testing negative numbers 
test('handles negative input', () => {
  expect(() => convert(-10, 'bytes', 'kilobytes')).toThrow("Invalid Input");
});

//testing inputs which contain otherthan digits 
test('handles letter input', () => {
  expect(() => convert('abc', 'bytes', 'kilobytes')).toThrow("Invalid Input");
});