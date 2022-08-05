let date = new Date();
let targetDate = new Date("January 1, 2023 00:01:00");

let day = Math.floor((targetDate - date) / 1000 / 60 / 60 / 24) - 1;
let hours = 23 - date.getHours();
let min = 60 - date.getMinutes();
console.log(
  "Until the new Year: " + day + " days, " + hours + " hourse, " + min + " minutes"
);