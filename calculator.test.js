// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    // Create a new Calculator instance before each test
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      // Act
      const result = calculator.add(5, 3);

      // Assert
      expect(result).toBe(8);
    });

    test('should add a positive and a negative number correctly', () => {
      // Act
      const result = calculator.add(5, -3);

      // Assert
      expect(result).toBe(2);
    });

    test('should add two negative numbers correctly', () => {
      // Act
      const result = calculator.add(-5, -3);

      // Assert
      expect(result).toBe(-8);
    });
  });

  describe('subtract', () => {
    // Write tests for the subtract method here
    test('should subtract two positive numbers correctly', () => {
      // Act
      const result = calculator.subtract(10, 3);

      // Assert
      expect(result).toBe(7);
    });

    test('should subtract a positive and a negative number correctly', () => {
      // Act
      const result = calculator.subtract(10, -3);

      // Assert
      expect(result).toBe(13);
    });

    test('should subtract two negative numbers correctly', () => {
      // Act
      const result = calculator.subtract(-10, -3);

      // Assert
      expect(result).toBe(-7);
    });
  });

  describe('divide', () => {
    // Write tests for the divide method here
    test('should divide two positive numbers correctly', () => {
      // Act
      const result = calculator.divide(10, 2);

      // Assert
      expect(result).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      // Act & Assert
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero.');
    });

    test('should divide a positive number by a negative number correctly', () => {
      // Act
      const result = calculator.divide(10, -2);

      // Assert
      expect(result).toBe(-5);
    });
  });

  describe('multiply', () => {
    // Write tests for the multiply method here
    test('should multiply two positive numbers correctly', () => {
      // Act
      const result = calculator.multiply(5, 3);

      // Assert
      expect(result).toBe(15);
    });

    test('should multiply a positive and a negative number correctly', () => {
      // Act
      const result = calculator.multiply(5, -3);

      // Assert
      expect(result).toBe(-15);
    });

    test('should multiply two negative numbers correctly', () => {
      // Act
      const result = calculator.multiply(-5, -3);

      // Assert
      expect(result).toBe(15);
    });
  });
});
