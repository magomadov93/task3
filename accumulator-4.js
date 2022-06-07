const str = ["adam", "yusuf", "ruslan", "halid", "valid", "sultan", "alvi", "umar", "ali", "usman"];
let newStr = [];
for (let i = 0; i < str.length; i++) {
  if (str[i][0] === "a") {
    newStr.push(str[i])
  }
}console.log(newStr)
