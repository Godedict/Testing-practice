// stringUtils.test.js
const { reverseString } = require('./stringUtils');

describe('reverseString', () => {
  test('should reverse a string correctly', () => {
    // Arrange
    const input = 'Hello, world!';

    // Act
    const result = reverseString(input);

    // Assert
    expect(result).toBe('!dlrow ,olleH');
  });
});
