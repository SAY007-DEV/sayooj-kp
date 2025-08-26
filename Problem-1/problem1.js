class Calculator {
      constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
      }

      calculate() {
        switch (this.operation) {
          case "add":
            return this.a + this.b;
          case "subtract":
            return this.a - this.b;
          case "multiply":
            return this.a * this.b;
          case "divide":
            return this.b !== 0 ? this.a / this.b : "Division by zero not allowed";
          default:
            return "Invalid operation";
        }
      }
    }

    function performCalculation() {
      const a = parseFloat(document.getElementById("a").value);
      const b = parseFloat(document.getElementById("b").value);
      const operation = document.getElementById("operation").value;
const calc = new Calculator(a, b, operation);
      document.getElementById("result").textContent = "Result: " + calc.calculate();
    }