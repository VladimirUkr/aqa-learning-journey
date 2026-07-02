function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello("Vlad");
sayHello("John");
sayHello("Maria");

function checkAge(age) {
    if (age >= 18) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}

checkAge(20);

function checkPassword(password) {
    const minLength = 8;
    const maxLength = 12;

    if (password.length < minLength) {
        console.log("Password is too short");
    } else if (password.length > maxLength) {
        console.log("Password is too long");
    } else {
        console.log("Password length is OK");
    }
}

checkPassword("123456781234567812345678");


function checkBalance(balance) {
    if (balance === 0) {
        console.log("Balance is empty");
    } else if (balance > 0 && balance < 100) {
        console.log("Low balance");
    }else {
        console.log("Sufficient balance");
    }
}

checkBalance(0);

checkBalance(50);

checkBalance(250);