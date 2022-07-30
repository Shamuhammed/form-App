
// calendar
// variables
let date = new Date;
let thisYear = date.getFullYear();
let maxYear = thisYear - 18;//
let minYear = thisYear - 50;//
let minDay = 1;
let maxDay = 31;
let weekDay = date.getDay();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getAllYears(allYears) {
   if (allYears.length === 0) {
      let newAllYears = [];
      for (let i = minYear; i <= maxYear; i++) {
         allYears.push(i);
      }
      return newAllYears;
   }   
   return allYears;
}

export function getAllDays(year, month) {
   let allDays = [];

   for (let i = 0; i < getWeekDay(year, month); i++) {
      allDays.push(' ');
   }
   for (let i = 1; i <= getDaysCount(year, month); i++) {
      allDays.push(i);
   }

   return allDays;
}

function getDaysCount(year, month) { // возвращает количество дней в месяце
   let nextDay = new Date(`${year.value}, ${getNumberMonth(month) + 1}, 1`)
   let currentDay = new Date(nextDay - 1 * 24 * 3600 * 1000);
   return currentDay.getDate();
}
export function getNumberMonth(month) { // месяц преобразовывает в число
   for (let i = 0; i < months.length; i++) {
      if (month === months[i]) return i+1;
   }
}
function getWeekDay(year, month) { // возвращает день недели
   let currentDate = new Date(`${year}, ${getNumberMonth(month)}, 1`);
   let day = currentDate.getDay();   
   if (day === 0) day = 7;
   return day-1;
}

export function addNull(elem) {
   if (elem < 10) {
      elem = '0'+ String(elem)
   }
   return elem
}

