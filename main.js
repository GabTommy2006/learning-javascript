var fullName = "Hoàng Phúc Hưng";
var age = 26;
alert(fullName);
alert(age);

console.log(fullName);
confirm("Bạn có muốn tiếp tục không?");
prompt("Bạn có muốn nhập vào đây không?");

setTimeout(function () {
  alert("Đây là thông báo sau 3 giây");
}, 1000);

setInterval(function () {
  console.log("Đây là thông báo sau mỗi 2 giây" + Math.random());
}, 2000);

var a = 1 + 2;
console.log(a);

var a = 1;
var b = 2;
if (a > b) {
  alert("a lớn hơn b");
}

if (a > 0 && b > 0) {
  alert("a và b đều lớn hơn 0");
}

var number = 6;

var output = number++ + --number;
console.log("Output: " + output);

let a = 2;
let ketQua = a++ + ++a;
console.log("Kết quả: " + ketQua);

var firstName = "Phúc";
var lastName = "Hưng";
var fullName = firstName + " " + lastName;

console.log(fullName);
