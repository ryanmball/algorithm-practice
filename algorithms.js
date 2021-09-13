// Birthday Cake Candles
// Return the count of the maximun number in the array (count of tallest candles)

var candles = [3, 2, 1, 3];

function birthdayCakeCandles(candleNums) {
  var max = Math.max.apply(Math, candleNums);
  var count = 0;
  candleNums.forEach((candle) => {
    if (candle === max) {
      count++;
    }
  });
  return count;
}

console.log(birthdayCakeCandles(candles));