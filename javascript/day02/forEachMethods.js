// const testCases = ["login", "logout", "checkout"];

// // testCases.forEach(function(testCase) {
// //     console.log(`Running: ${testCase}`);
// // });

// // testCases.forEach((testCase) => {
// //     console.log(testCase);
// // });

// const newTestCases = testCases.map((testCase) => {
//     return `TEST: ${testCase}`;
// });

// console.log(newTestCases); 
// console.log(testCases); 

// const statusCodes = [200, 404, 500, 201, 403, 301];

// const statusCodesMore400 = statusCodes.filter((statusCode) => {
//     return statusCode >= 400;
// });

// console.log(statusCodes);
// console.log(statusCodesMore400);

// const results = [
//     { name: "login", status: "passed" },
//     { name: "logout", status: "failed" },
//     { name: "checkout", status: "failed" }
// ];

// const resultFailed = results.find((result) => {
//     return result.status === "failed";
// });

// console.log(resultFailed);

// const results = ["passed", "failed", "passed", "passed", "failed"];

// const resultsPassed = results.reduce((accumulator, result) => {
//     if (result === "passed") {
//         return accumulator + 1;
//     }
    
// }, 0);

// console.log(resultsPassed);

const prices = [10, 25, 40, 15];

const pricesWithTax = prices.map((price) => {
    return `Price with 20% tax: ${price * 1.2}`;
});

console.log(prices);
console.log(pricesWithTax);

const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Carl", age: 15 },
    { name: "Diana", age: 30 }
];

const usersAbove18 = users.filter((user) => {
    return user.age >= 18;
});

console.log(usersAbove18);

const testCases = [
    { name: "login", priority: "low" },
    { name: "payment1", priority: "low" },
    { name: "payment2", priority: "medium" },
    { name: "payment3", priority: "himediumgh" },
    { name: "payment4", priority: "high" },
    { name: "payment5", priority: "high" },
    { name: "payment6", priority: "high" },
    { name: "logout", priority: "medium" }
];

const highPriorityTestCase = testCases.find((testCase) => {
    return testCase.priority === "high";
});

console.log(highPriorityTestCase);

const cart = [10, 25, 40, 15];

const totalPrice = cart.reduce((accumulator, price) => {
    return accumulator + price;
}, 0);

console.log(totalPrice);

const testResults = [
    { name: "login", status: "failed" },
    { name: "logout", status: "passed" },
    { name: "checkout", status: "failed" },
    { name: "payment", status: "passed" }
];

const failedTestResults = testResults
    .filter((result) => result.status === "failed")
    .map((result) => result.name);


console.log(failedTestResults);