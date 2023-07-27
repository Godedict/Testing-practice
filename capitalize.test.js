// capitalize.test.js
const { capitalize } = require('./capitalize');

test('capitalize should capitalize the first character of a string', () => {
  // Arrange
  const input = 'hello, world!';

  // Act
  const result = capitalize(input);

  // Assert
  expect(result).toBe('Hello, world!');
});
