var languages = ["JavaScript", "PHP", "Ruby"];

//1. To string: chuyển mảng thành chuỗi
console.log(languages.toString());

//2. Join: chuyển mảng thành chuỗi và có thể thay đổi ký tự phân cách
console.log(languages.join(" - "));

//3. Pop: xóa phần tử cuối mảng và trả về phần tử đó
var lastElement = languages.pop();
console.log(lastElement);
console.log(languages);

//4. Push: thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
var newLength = languages.push("Python");
console.log(newLength);
console.log(languages);

//5. Shift: xóa phần tử đầu mảng và trả về phần tử đó
var firstElement = languages.shift();
console.log(firstElement);
console.log(languages);

//6. Unshift: thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
var newLength2 = languages.unshift("C++");
console.log(newLength2);
console.log(languages);

//7. Splice: xóa hoặc thêm phần tử vào mảng
//Xóa phần tử từ vị trí 1, xóa 1 phần tử
var removedElements = languages.splice(1, 1);
console.log(removedElements);
console.log(languages);

//Thêm phần tử vào vị trí 1, thêm 1 phần tử
var addedElements = languages.splice(1, 0, "Java");
console.log(addedElements);
console.log(languages);

//8. Concat: nối mảng
var newLanguages = languages.concat(["C#", "Go"]);
console.log(newLanguages);

//9. Slice: cắt mảng
var slicedLanguages = languages.slice(1, 3);
console.log(slicedLanguages);
