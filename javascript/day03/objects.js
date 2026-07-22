// const testResult = {
//     name: "checkout",
//     status: "failed",
//     duration: 1200
// };

// const { name, status, duration } = testResult;

// console.log(name, status, duration); // checkout failed 1200

// const credentials = ["admin", "P@ssw0rd123"];

// const [username, password] = credentials;

// console.log(username, password); // admin P@ssw0rd123

// const testConfig1 = { name: "login test" };
// const testConfig2 = { name: "checkout test", timeout: 5000 };

// const { name: name1, timeout: timeout1 = 3000 } = testConfig1;
// const { name: name2, timeout: timeout2 = 3000 } = testConfig2;

// console.log(name1, timeout1); // login test 3000
// console.log(name2, timeout2); // checkout test 5000

const defaultSettings = { timeout: 3000, retries: 2, headless: true };
const overrides = { retries: 5 };

const finalSettings = { ...defaultSettings, ...overrides };

console.log(finalSettings); // { timeout: 3000, retries: 5, headless: true }