require('colors');

const Colors = {GREEN : 0, YELLOW : 1, RED : 2}

let initialColor = Colors.GREEN;
const firstNum = process.argv[2];
const lastNum = process.argv[3];
let flag = true;

if (isNaN(firstNum) || isNaN(lastNum)) {
   console.log('введите корректное значение'.red);
   return;
}

const isFirstNum = (num) => {
   if (num <= 1)
      return false;
   for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
   return true;
}

const changeColor = () => {
  initialColor++;
   if (initialColor > Colors.RED)
      initialColor = Colors.GREEN;
}

const colorPrint = (num) => {
   if (flag) flag = false;
   switch (initialColor) {
     case Colors.RED:
       console.log(`${num}`.red);
       break;
     case Colors.GREEN:
       console.log(`${num}`.green);
       break;
     case Colors.YELLOW:
       console.log(`${num}`.yellow);
       break;
   }
   changeColor();
}
for (let i = firstNum; i <= lastNum; i++){
   if(isFirstNum(i)) colorPrint(i)
}
if (flag)
console.log(`в выбранном диапазоне нет натуральных чисел[${firstNum}, ${lastNum}]`.red)