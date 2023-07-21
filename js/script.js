// const OPERATORS = {
//     '+': {

//         precedence: 1,
//         operation: (a, b) => a + b,
//     },
//     '-': {

//         precedence: 1,
//         operation: (a, b) => a - b,
//     },
//     '*':
//     {

//         precedence: 2,
//         operation: (a, b) => a * b,
//     },
//     '/':
//     {
//         precedence: 2,
//         operation: (a, b) => {
//             try {
//                 if (b === 0) {
//                     throw new Error("Деление на ноль не допускается");
//                 }

//                 return a / b;
//             }
//             catch (e) {
//                 console.log('Произошла ошибка:');
//                 console.log('Сообщение:', e.message);
//             }
//         },
//     },
//     '%':
//     {

//         precedence: 2,
//         operation: (a, b) => a * (b / 100), // процент от числа вроде бы, я хз как по другому )
//     },
//     '^':
//     {
//         precedence: 3,
//         operation: (a, b) => Math.pow(a, b),
//     },
//     '√':
//     {
//         precedence: 3,
//         operation: (a) => {
//             try {
//                 if (a <= 0) {
//                     throw new Error("Значения меньше единицы не допускаются");
//                 }
//                 return Math.sqrt(a);
//             }
//             catch (e) {
//                 console.log('Произошла ошибка:');
//                 console.log('Сообщение:', e.message);
//             }
//         }


//     },
//     '!':
//     {
//         precedence: 2,

//         operation: (a) => {

//             try {
//                 if (!Number.isInteger(a)) {  // 
//                     throw new Error("Значение должно быть целым");
//                 }
//                 else if (a <= 0) {
//                     throw new Error("Значения меньше нуля не допускаются");
//                 }
//                 else if (a > 170) {
//                     throw new Error("Значения больше 170 не допускается");
//                 }
//                 let i = 1;
//                 while (a) {
//                     i *= a--;
//                 }
//                 return i;
//             }
//             catch (e) {
//                 console.log('Произошла ошибка:');
//                 console.log('Сообщение:', e.message);
//             }


//         }
//     }
// };
// const a = parseFloat(prompt("Введите первое число"));
// const operator = prompt("Введите оператор: ");
// const b = parseFloat(prompt("Введите второе число"));

// if (OPERATORS.hasOwnProperty(operator)) {  // используется для проверки того, имеет ли объект указанное свойство как собственное свойство. Это полезно для проверки того, унаследовал ли объект свойство, а не является ли он своим.
//     const result = OPERATORS[operator].operation(a, b);
//     console.log("Результат:", result);
// } else {
//     console.log("Некорректный оператор.");
// }


function parse(f) {
  let result = [];
  let number = '';

  for (let i = 0; i < f.length; i++) {

    if (f[i] >= '0' && f[i] <= '9') {
     
      number += f[i];

     } else if (f[i] === '.') {
       if (number !== '') {
         number += f[i];
       }
     } else if (f[i] === '+' || f[i] === '-' || f[i] === '*' || f[i] === '/' || f[i] === '^' || f[i] === '%' ) {
       result.push({ 'Символ': parseFloat(number), 'Тип': 'цифра' });
       if (number !== '') {
         number = '';
       }
       result.push({ 'Символ': f[i], 'Тип': 'Оператор' });
     } else if (f[i] === '(' || f[i] === ')') {
       if (number !== '') {
         result.push(parseFloat(number));
         number = '';
       }
       result.push({ 'Символ': f[i], 'Тип': 'Скобки' });
     }
   }
   
 if (number !== '') {
   result.push({ 'Символ': parseFloat(number), 'Тип': 'цифра' });
 }

 return result;
}


const primer = '158+536+5.5-564';
const parsed = parse(primer);
console.log(parsed);

