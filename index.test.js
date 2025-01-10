//connecting the functions from the logic.js
const { convert } = require('./logic');

test("That jest is working",()=>{
    expect(2+6).toBe(8)
});

// test if conversion occurs correctly to 2dp
test('conversion with 2dp', () => {
  expect(convert(1024.435, 'bytes', 'kilobytes')).toBe(1.00);
});

// testing negative numbers 
test('negative input', () => {
  expect(() => convert(-145, 'megabytes', 'kilobytes')).toThrow("Invalid Input");
});

//testing inputs which contain otherthan digits 
test('letter input', () => {
  expect(() => convert('fgd', 'bytes', 'bytes')).toThrow("Invalid Input");
});