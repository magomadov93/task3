const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = 0;
for ( let i = 0; i < arr.length; i++) {
  arr[i] + newArr
  newArr = arr[i] + newArr
}console.log(newArr);