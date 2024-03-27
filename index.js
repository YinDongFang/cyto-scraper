const generateUUID = require('./generateUUID')
const isPalindrome = require('./isPalindrome')
const stringToNumberArray = require('./stringToNumberArray')
const uniqueArray = require('./uniqueArray')
const flattenArray = require('./flattenArray')

module.exports = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }