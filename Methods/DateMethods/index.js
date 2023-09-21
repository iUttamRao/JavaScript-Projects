const d = new Date();
let  date= d.getDate();
let day = d.getDay();
let fullyear = d.getFullYear();
let hours = d.getHours();
let milliseconds = d.getMilliseconds();
let minutes = d.getMinutes();
let months = d.getMonth();
let seconds = d.getSeconds();
let time = d.getTime();
let now = Date.now();
// let day = d.getDate();
console.log(day);
console.log(date);
console.log(fullyear);
console.log(hours);
console.log(milliseconds);
console.log(minutes);
console.log(months);
console.log(seconds);
console.log(time);
console.log(now);

console.log(Date.parse('15 Aug 1978'))
