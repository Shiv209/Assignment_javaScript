// Get the current date and time
let current = new Date();

// Extract the year, month, and day from the date
let year = current.getFullYear();
let month = current.getMonth() + 1; // months are zero-indexed, so add 1
let day = current.getDate();

// Print the date to the console
console.log(`The current date is: ${month}/${day}/${year}`);

