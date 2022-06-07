const str = ["Java", "С", "Python", "Groovy", "Go", "PHP", "Perl", "Simula", "Zonnon", "Eiffel" ];
let newStr = [];
for (let i = 0; i < str.length; i++) {
  if (str[i].length > 3) {
    newStr.push(str[i])
  }
}console.log(newStr);