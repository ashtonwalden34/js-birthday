var user = prompt("Enter your name:");
var age = prompt("Enter your age:");
var month = prompt("Enter the month you were born:");

var ageNum = parseInt(age);

if (ageNum < 50) {
    alert("You are " + ageNum + ". Wow! You are still young!");
}
else if (ageNum == 50) {
    alert("50 years old!")
}
else if (ageNum > 50) {
    alert("You are " + ageNum + ". Dang, you are old!");
}
else {
    alert("Please enter a number and try again.")
}

alert("Happy Birthday " + user + " you are " + age + 
" years old and you were born in " + month + "!");