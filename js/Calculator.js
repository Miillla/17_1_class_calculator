class Calculator {
  constructor() {
    this.value = 0;
  }
  //   add(5, 3)
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    //  Can't divede by 0
    if (0 === b) {
      return;
    }
    return a / b;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18
