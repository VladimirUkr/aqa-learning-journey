//Block 1

//Block 1.1
// const name = "John Doe";
// const age = 42;
// const isAlive = true;
// let x;

// console.log(typeof name, typeof age, typeof isAlive, typeof x); 

//Block 1.2
// console.log("10" == 10, "10" === 10, null == undefined, null === undefined);

//Block 2

//Block 2.1
// const testSpeed = [500, 1500, 3200, 800, 6000];

// for (let i = 0; i < testSpeed.length; i++) {
//     if (testSpeed[i] < 1000) {
//         console.log(`Test ${i + 1} is fast: ${testSpeed[i]}ms`);
//     } else if (testSpeed[i] >= 1000 && testSpeed[i] <= 5000) {
//         console.log(`Test ${i + 1} is medium: ${testSpeed[i]}ms`);
//     } else {
//         console.log(`Test ${i + 1} is slow: ${testSpeed[i]}ms`);
//     }
// }

//Block 2.2
// const testResults = ["passed", "passed", "failed", "passed", "critical", "failed", "passed"];

// while (testResults.length > 0) {
//     const result = testResults.shift();
//     if (result === "critical") {
//         console.log("Stopping: critical failure found");
//         break;
//     } else {
//         console.log(`Test ${result}`);
//     }
// }

// // Правильный вариант с использованием for...of:
// for (const result of testResults) {
//     if (result === "critical") {
//         console.log("Stopping: critical failure found");
//         break;
//     }
//     console.log(`Test ${result}`);
// }

//Block 3

//Block 3.1
// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Mouse", price: 25 },
//     { name: "Monitor", price: 300 },
//     { name: "Keyboard", price: 45 }
// ];

// const productPriceMore100 = products
//     .filter((product) => product.price > 100)
//     .map((product) => product.name);

// console.log(productPriceMore100); // ["Laptop", "Monitor"]

//Block 3.2
const testResults = ["passed", "failed", "passed", "failed", "failed"];

const counts = testResults.reduce((accumulator, result) => {
    if (accumulator[result]) {
        accumulator[result] = accumulator[result] + 1;
    } else {
        accumulator[result] = 1;
    }
    return accumulator;
}, {});

console.log(counts); // { passed: 2, failed: 3 }

const browsers = ["chromium", "firefox", "chromium", "webkit", "chromium", "firefox"];

const browserCounts = browsers.reduce((accumulator, result) => {
    if (accumulator[result]) {
        accumulator[result] = accumulator[result] + 1;
    } else {
        accumulator[result] = 1;
    }
    return accumulator;
}, {});

console.log(browserCounts);

//Block 4

//Block 4.1
// const testWindow = { browser: "chromium", viewport: { width: 1280, height: 720 } }; 

// const { browser, viewport: { width, height } } = testWindow;
// const { width: w, height: h } = testWindow.viewport;

// console.log(browser, width, height, w, h); // "chromium", 1280, 720

//Block 4.2

// const base = { retries: 2, timeout: 3000 };
// const custom = { timeout: 10000 };

// const finalConfig = { ...base, ...custom };

// console.log(finalConfig); // { retries: 2, timeout: 10000 }

//Block 5

//Block 5.1
// function delay(ms, message) {
//     return new Promise((resolve) => setTimeout(() => resolve(message), ms));
// }

// async function runDelays() {
//     const messages = ["Step 1 done", "Step 2 done"];
//     for (const msg of messages) {
//         const result = await delay(500, msg);
//         console.log(result);
//     }
// }

// runDelays();

//Block 6

//Block 6.1
// const tests = [
//     { name: "login", status: "passed", duration: 400 },
//     { name: "logout", status: "failed", duration: 1200 },
//     { name: "checkout", status: "passed", duration: 2500 },
//     { name: "payment", status: "failed", duration: 300 }
// ];