const OPERATORS = {
    '+': {
        
        precedence: 1,
        operation: (a, b) => a + b,
    },
    '-': {
        
        precedence: 1,
        operation: (a, b) => a - b,
    },
    '*': {
       
        precedence: 2,
        operation: (a, b) => a * b,
    },
    '/': {
        
        precedence: 2,
        operation: (a, b) => a / b,
    },
    '^': {
       
        operation: (a) => Math.pow(a, b),
    },
    '√': {
        operation: (a ) => Math.sqrt(a),
    },
    '!': {
        operation: (a) => a,
    },
    '%': {
        operation: (a) => a,
    },
    '()':{
     
    },
};


