

function evaluateExpression(expression) {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    };
  
    const tokens = expression.match(/\d+|\+|-|\*|\//g);
    const stack = [];
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
  
      if (operators[token]) {
        const b = stack.pop();
        const a = stack.pop();
        const result = operators[token](Number(a), Number(b));
        stack.push(result);
      } else {
        stack.push(token);
      }
    }
  
    return stack[0];
  }
  const expression = "45+5";
const result = evaluateExpression(expression);
console.log(result); // Output: 50