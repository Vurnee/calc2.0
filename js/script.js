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
            try {
                if (b === 0) {
                    throw new Error("Деление на ноль не допускается");
                }

                return a / b;
            }
            catch (e) {
                console.log('Произошла ошибка:');
                console.log('Сообщение:', e.message);
            }
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
        operation: (a) => {
            try {
                if (a < 0) {
                    throw new Error("Значения меньше нуля не допускаются");
                }
                return Math.sqrt(a);
            }
            catch (e) {
                console.log('Произошла ошибка:');
                console.log('Сообщение:', e.message);
            }
        }


    },
    '!':
    {
        precedence: 2,
        operation: (a) => {
            try {
                if (a === undefined) {
                    throw new Error("Значение не может быть undefined");
                }
                else if (Number.isInteger(a)) {
                    throw new Error("Значение должно быть целым");
                }
                else if(a===false){
                    throw new Error("Ошибка,задайте число")
                }
                else if (a <= 0) {
                    throw new Error("Значения меньше нуля не допускаются");
                }
                else if (a > 170) {
                    throw new Error("Значения больше 170 не допускается");
                }
                let i = 1;
                while (a) {
                    i *= a--;
                }
                return i;
            }
            catch (e) {
                console.log('Произошла ошибка:');
                console.log('Сообщение:', e.message);
            }
            
        }
    }
};



