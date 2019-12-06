/**************************************************************************
 * @purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
 *            Store the prime numbers in a 2D Array, the first dimension represents the 
 *            range 0-100, 100-200, and so on. While the second dimension represents the
 *            prime numbers in that range
 * @author : Soumya Chinnur
 * @file : primeRange.js
 ***********************************************************************/
let take = require("../primeRange2D/primeRangeBL")
const start = 0;
const end = 100;
const primeArray = new Array(10);
for (let i = 0; i < 10; i++) {
  primeArray[i] = take.primeRange(start, end);
  start = start + 100;
  end = end + 100;
}
start = 0;
end = 100;
//print two dimension array
for (let i = 0; i < 10; i++) {
  console.log("[" + start + "," + end + "] : " + primeArray[i]);
  start = start + 100;
  end = end + 100;
}
