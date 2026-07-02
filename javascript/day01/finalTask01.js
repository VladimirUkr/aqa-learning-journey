const passwords = ["abc", "Password1!", "12", "qwerty123", "P@ss"];
let okCount = 0;

for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    if (password.length < 6) {
        console.log(`${password}: is too short`);
    } else if (password.length >= 10) {
        console.log(`${password}: is too long`);
    } else {
        console.log(`${password}: OK`);
        okCount++;
    }
}

console.log(`Total OK passwords: ${okCount}`);