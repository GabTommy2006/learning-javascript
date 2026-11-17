var firstName = "Phuc";
var lastName = "Hung";

console.log("Tôi là: " + firstName + " " + lastName);
console.log(`Tôi là: ${firstName} ${lastName}`);

//Làm việc với chuỗi:
var myString = "Học lập trình JavaScript";

//1. Length: Độ dài chuỗi
console.log(myString.length);

//2. Find index: Tìm vị trí của chuỗi con
console.log(myString.indexOf("lập trình"));

//3. Cut string: Cắt chuỗi
console.log(myString.slice(4, 15));

//4. Replace: Thay thế chuỗi
console.log(myString.replace("JavaScript", "PHP"));

//5. Convert to upper case: Chuyển chuỗi thành chữ hoa
console.log(myString.toUpperCase());

//6. Convert to lower case: Chuyển chuỗi thành chữ thường
console.log(myString.toLowerCase());

//7. Trim: Xóa khoảng trắng thừa ở đầu và cuối chuỗi
var myString2 = "    Học lập trình JavaScript    ";
console.log(myString2.trim());

//8. Split: Tách chuỗi thành mảng
var languages = "JavaScript, PHP, Ruby";
console.log(languages.split(", "));

//9. Get a character by index: Lấy ký tự theo vị trí
var myString3 = "Học lập trình JavaScript";
console.log(myString3.charAt(0));
console.log(myString3[0]);

var coursesString = "Học lập trình JavaScript";

function convertStringToArray(string) {
  return string.split(", ");
}

console.log(convertStringToArray(coursesString));
