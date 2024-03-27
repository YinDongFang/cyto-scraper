module.exports = (arr) => {
    return arr.reduce(
      (acc, curr) =>
        acc.concat(Array.isArray(curr) ? utils.flattenArray(curr) : curr),
      []
    );
  }