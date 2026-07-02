const countries = [
    "Romania",
    "Thailand",
    "Ukraine",
    "Germany"
];

countries.push("Japan");

console.log(countries);

countries.pop();

console.log(countries[0]); // First country

console.log(countries[countries.length - 1]); // Last country

console.log(countries.length); // Total countries

console.log(countries.includes("Ukraine"));

console.log(countries.includes("France"));