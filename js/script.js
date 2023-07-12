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
                if (Number.isInteger(a)) {
                    throw new Error("Значение должно быть целым");
                }
                else if (a === 0) {
                    return 1;
                }
                else if (a < 0) {
                    throw new Error("Значения меньше нуля не допускаются");
                }
                else if(a>170){
                    throw new Error("Значения больше 170 не допускается");
                }
                let i = 1;
                while(a){
                    i*=a--;
                }
                return i;
                
            }
        },

    };

}
catch (e) {
    console.log('Произошла ошибка:');
    console.log('Сообщение:', e.message);
    console.log('Имя ошибки:', e.name);
    console.log('Стек вызовов:', e.stack);
}
