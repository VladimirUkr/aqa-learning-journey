const age = 29;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

const balance = 75;

if (balance >= 100) {
    console.log("Withdrawal allowed");
} else {
    console.log("Insufficient balance");
}

const statusCode = 404;

if (statusCode === 200) {
    console.log("Success");
} else {
    console.log("Error");
}

const passwordMinLength = 8;
const passwordMaxLength = 24;
const passwordInput = "1!";

if (passwordInput === passwordMinLength) {
    console.log("Password length is exactly 8");
}else if (passwordInput < passwordMinLength) {
    console.log("Password length is too short");   
}else if (passwordInput > passwordMaxLength) {
    console.log("Password length is too long");   
}else if (passwordInput >= passwordMinLength && passwordInput <= passwordMaxLength) {
    console.log("Password length is OK");   
}
else {
    console.log("Wrong password length");
}