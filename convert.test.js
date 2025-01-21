const convert = require('./convert')
test('converts 100 INR to USD correctly', () => {
expect(convert(100)).toBe('1.20');
});
test('converts 0 INR to USD', () => {
expect(convert(0)).toBe('0.00');
});
test('handles negative values', () => {                     
expect(convert(-100)).toBe('-1.20');
});
test('handles non-numerical values', () => {
expect(()=> convert('ten')).toThrow("Invalid amount");
});