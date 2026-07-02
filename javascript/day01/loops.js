let attempt = 1;
let elementFound = false;

while (attempt <= 5) {
    console.log("Attempt " + attempt + ": not found");
    if (attempt === 4) {
        elementFound = true;
        console.log("Element found on attempt " + attempt + "!");
        break;
    }
    attempt++;
}