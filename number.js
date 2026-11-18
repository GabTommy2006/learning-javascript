function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

console.log(isNumber(123)); // true
console.log(isNumber("abc")); // false
