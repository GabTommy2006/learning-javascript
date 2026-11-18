//Object constructor:
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var author = new User("Phúc", "Hưng", "Avatar");
var user = new User("Nguyễn", "Hưng", "Avatar");

console.log(author);
console.log(user);

author.title = "Chia sẻ dạo"; // Thêm thuộc tính mới cho object
user.comment = "Bình luận dạo"; // Thêm thuộc tính mới cho object

//Math object:
//1. Math.PI: Giá trị PI
console.log(Math.PI);
//2. Math.round(): Làm tròn số
console.log(Math.round(5.6));
//3. Math.abs(): Giá trị tuyệt đối
console.log(Math.abs(-5));
//4. Math.ceil(): Làm tròn lên
console.log(Math.ceil(5.1));
//5. Math.floor(): Làm tròn xuống
console.log(Math.floor(5.9));
//6. Math.random(): Số ngẫu nhiên từ 0 đến 1
console.log(Math.random());
//7. Math.min(): Giá trị nhỏ nhất
console.log(Math.min(1, 2, 3, 4, 5));
//8. Math.max(): Giá trị lớn nhất
console.log(Math.max(1, 2, 3, 4, 5));
//9. Math.sqrt(): Căn bậc hai
console.log(Math.sqrt(9));
//10. Math.pow(): Lũy thừa
console.log(Math.pow(2, 3));
//11. Math.sin(): Sin
console.log(Math.sin(0));
//12. Math.cos(): Cos
console.log(Math.cos(0));
//13. Math.tan(): Tan
console.log(Math.tan(0));
//14. Math.log(): Logarit
console.log(Math.log(1));
//15. Math.exp(): Lũy thừa cơ số e
console.log(Math.exp(1));
//16. Math.trunc(): Lấy phần nguyên
console.log(Math.trunc(5.9));
//17. Math.sign(): Kiểm tra dấu
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0));
//18. Math.cbrt(): Căn bậc ba
console.log(Math.cbrt(27));
//19. Math.hypot(): Tính độ dài cạnh huyền
console.log(Math.hypot(3, 4)); // 5
//20. Math.clz32(): Đếm số lượng bit 0 ở đầu
console.log(Math.clz32(1)); // 31
