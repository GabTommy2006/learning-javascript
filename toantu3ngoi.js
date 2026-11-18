var course = {
  name: "JavaScript",
  price: 1000000,
};

if (course.price > 0) {
  console.log(`${course.name} VNĐ`);
} else {
  console.log(`${course.name} Free`);
}

var result = course.price > 0 ? `${course.name} VNĐ` : `${course.name} Free`;
console.log(result);

var a = 1;
var b = 2;

var c = a > b ? a : b;
console.log(c);

function getTotal(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Expected results
getTotal([1, 2, 3]); // Output: 6
getTotal([4, 5, -3]); // Output: 6
getTotal([4, 5, 3, 5]); // Output: 17

//For/in loop
var myInfo = {
  name: "Hoàng Phúc Hưng",
  age: 26,
  address: "Hà Nội",
};

for (var key in myInfo) {
  console.log(key + ": " + myInfo[key]);
}

var languages = ["JavaScript", "PHP", "Ruby"];
for (var index in languages) {
  console.log(index + ": " + languages[index]);
}

//For/of loop
var languages2 = ["JavaScript", "PHP", "Ruby"];
for (var value of languages2) {
  console.log(value);
}

var info = {
  name: "Hoàng Phúc Hưng",
  age: 20,
  address: "Đà Nẵng",
};

for (var key in info) {
  console.log(key + ": " + info[key]);
}

//While loop
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
var myArray = ["JavaScript", "PHP", "Ruby"];
var i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

//Do/while loop
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

var myArray2 = ["JavaScript", "PHP", "Ruby"];
var i = 0;
do {
  console.log(myArray2[i]);
  i++;
} while (i < myArray2.length);

//Nested loop
var myArray3 = [
  ["JavaScript", "PHP", "Ruby"],
  ["ReactJS", "Angular", "VueJS"],
];
for (var i = 0; i < myArray3.length; i++) {
  for (var j = 0; j < myArray3[i].length; j++) {
    console.log(`i = ${i}, j = ${j}: ${myArray3[i][j]}`);
  }
}
