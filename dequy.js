//Bài toán đệ quy: Xóa mảng trùng lặp
var arr = [1, 2, 3, 4, 5, 1, 2, 3];
function removeDuplicates(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    var firstElement = arr[0];
    var restOfArray = arr.slice(1);
    var filteredRest = removeDuplicates(restOfArray).filter(function (element) {
      return element !== firstElement;
    });
    return [firstElement].concat(filteredRest);
  }
}
