function writeLog(message) {
  console.log(message);
}

writeLog("Hello World");

function writeLog2() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
}

writeLog2("Log 1", "Log 2", "Log 3");

function cong(a, b) {
  return a + b;
  console.log("Hello");
}

var result = cong(2, 8);
console.log(result);

function cong2(a, b) {
  return a.toString() + b.toString();
}

var result2 = cong2(2, 8);
console.log(result2);

function showMessage() {
  function showMessage2() {
    console.log("Message 2");
  }
  showMessage2();
  console.log("Message 1");
}
