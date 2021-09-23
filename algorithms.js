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

console.log(timeConversion(secondTime));

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

console.log(gradingStudents([73, 67, 38, 33]));
