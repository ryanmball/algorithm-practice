// Birthday Cake Candles
// Return the count of the maximun number in the array (count of tallest candles)
let candles = [3, 2, 1, 3];

function birthdayCakeCandles(candleNums) {
  let max = Math.max.apply(Math, candleNums);
  let count = 0;
  candleNums.forEach((candle) => {
    if (candle === max) {
      count++;
    }
  });
  return count;
}
// console.log(birthdayCakeCandles(candles));


// Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
let firstTime = "12:01:00PM";
let secondTime = "12:01:00AM";

const timeConversion = (time) => {
  let hours = time.substr(0, 2);
  let minutes = time.substr(3, 2);
  let seconds = time.substr(6, 2);
  let timeOfDay = time.substr(-2, 2);

  if (timeOfDay === "PM" && hours === "12") {
    return `${hours}:${minutes}:${seconds}`;
  } else if (timeOfDay === "PM" && hours !== "12") {
    return `${(parseInt(hours) + 12).toString()}:${minutes}:${seconds}`;
  } else if (timeOfDay === "AM" && hours === "12") {
    return `00:${minutes}:${seconds}`;
  } else if (timeOfDay === "AM" && hours !== "12") {
    return `${hours}:${minutes}:${seconds}`;
  }
};
// console.log(timeConversion(secondTime));


// Grading Students
// Write code to automate the rounding process for grading of students
const gradingStudents = (grades) => {
  let roundedGrades = [];
  grades.forEach((grade) => {
    if (grade < 38) {
      roundedGrades.push(grade);
    } else if (grade % 5 === 3) {
      roundedGrades.push(grade + 2);
    } else if (grade % 5 === 4) {
      roundedGrades.push(grade + 1);
    } else {
      roundedGrades.push(grade);
    }
  });
  return roundedGrades;
};
// console.log(gradingStudents([73, 67, 38, 33]));


// Example of using Object.fromEntries functionality
// var fruits = [
//   { name: "apple", color: "red" },
//   { name: "banana", color: "yellow" },
//   { name: "grape", color: "purple" },
// ];
// console.log(Object.fromEntries(fruits.map((key) => [key.name, key.color])));


// Count Apples & Oranges
const appleAndOrange = (s, t, a, b, apples, oranges) => {
  let count = [0, 0];
  apples.forEach((apple) => {
    if (a + apple >= s && a + apple <= t) {
      count[0]++;
    }
  });
  oranges.forEach(orange => {
    if (b + orange >= s && b + orange <= t) {
      count[1]++;
    }
  });
  console.log(count[0]);
  console.log(count[1]);
};
// appleAndOrange(2, 3, 1, 5, [2], [-2]);


// Number Line Jumps
const kangaroo = (x1, v1, x2, v2) => {
  if (x1 === x2 && v1 === v2) {
    return "YES";
  } else if (x1 > x2 && v2 > v1) {
    return "YES";
  } else if (x2 > x1 && v1 > v2) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(kangaroo(0, 3, 4, 2));

// Between Two Sets