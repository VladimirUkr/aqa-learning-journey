// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;

//         if (success) {
//             resolve("Login successful"); // операция прошла успешно
//         } else {
//             reject("Login failed");      // операция провалилась
//         }
//     }, 1000);
// });

// promise
//     .then((result) => {
//         console.log(result); // "Login successful" — если resolve
//     })
//     .catch((error) => {
//         console.log(error); // "Login failed" — если reject
//     });

function checkServerStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isOnline = true;
            if (isOnline) {
                resolve("Server is online");
            } else {
                reject("Server is offline");
            }
        }, 1000);
    });
}

async function runCheck() {
    try {
        const status = await checkServerStatus();
        console.log(status); // "Server is online" — если resolve
    } catch (error) {
        console.log(error); // "Server is offline" — если reject
    }
}

runCheck();