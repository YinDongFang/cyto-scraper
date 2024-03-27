module.exports = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }