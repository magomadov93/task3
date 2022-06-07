const arr = [1, -2, 3, 4, -5, 6, -7, 8, 9, 10];
let i = 0;
let newArr = 0;
while (i < arr.length) {
  if (arr[i] > 0) {
    newArr = arr[i] + newArr
  }i++;
}console.log(newArr)