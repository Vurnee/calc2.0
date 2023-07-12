try {
    const OPERATORS = {
        '+': {

            precedence: 1,
            operation: (a, b) => a + b,
        },
        '-': {

            precedence: 1,
            operation: (a, b) => a - b,
        },
        '*':
        {

            precedence: 2,
            operation: (a, b) => a * b,
        },
        '/':
        {
            precedence: 2,
            operation: (a, b) => {
                if (b === 0) {
                    throw new Error("Деление на ноль не допускается");
                }
                
                   return a / b;
                
            },
        },
        '%':
        {

            precedence: 2,
            operation: (a, b) => a * b / 100, // процент от числа вроде бы, я хз как по другому )
        },
        '^':
        {
            precedence: 3,
            operation: (a, b) => Math.pow(a, b),
        },
        '√':
        {
            precedence: 3,
            operation: (a) => Math.sqrt(a),
        },
        '!':
        {
            precedence: 2,
            operation: (a) => {
                if (a < 1) {
                    throw new Error("Значения меньше единицы не допускаются");
                }
                
                  return  a === 0 ? 1 : a * OPERATORS['!'].operation(a - 1);
                
            }
        },

    };

}
catch (e) {
    console.error(e);
}
