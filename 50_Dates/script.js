// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// Date(year, month, day, hours, minutes, seconds, milliseconds)

const dates = new Date();

// take the dates objects
// const year = dates.getFullYear();
// const month = dates.getMonth();
// const date = dates.getDate();
// const hour = dates.getHours();
// const minutes = dates.getMinutes();
// const seconds = dates.getSeconds();
// const dayOfWeek = dates.getDay()

// console.log(year);
// console.log(month);
// console.log(date);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// set the dates objects
dates.setFullYear(2025);
dates.setMonth(4);
dates.setDate(5);
dates.setHours(12);
dates.setMinutes(60);
dates.setSeconds(30);

console.log(dates);

// compare dates objects
const date1 = new Date("2026-01-30");
const date2 = new Date("2026-02-30");

if(date1 < date2){
    console.log("Happy new year");
}