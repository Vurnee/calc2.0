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
    '%': {
        precedence: 2,
        operation: (a, b) => a * b / 100, // процент от числа вроде бы, я хз как по другому )
    },
    '^': {
        precedence: 3,
        operation: (a, b) => Math.pow(a, b),
    },
    '√': {
        precedence: 3,
        operation: (a) => Math.sqrt(a, 0.5),
    },
    '!': {
        precedence: 2,
        operation: (a) => a === 0 ? 1 : a * OPERATORS['!'].operation(a - 1)
    },
};


