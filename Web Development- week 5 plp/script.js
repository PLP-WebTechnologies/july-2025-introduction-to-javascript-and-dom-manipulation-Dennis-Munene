
// Variable Declarations and Conditionals

let userName = "Dennis";
let userAge = 20;
let isMember = true;

if (userAge >= 18 && isMember) {
  console.log(`${userName} is an adult member.`);
} else {
  console.log(`${userName} is not an adult member.`);
}


// Function 1: Greeting function
function displayGreeting(name) {
  return `Hello, ${name}! Welcome to the JavaScript.`;
}

// Function 2: Generate a list of numbers up to a limit
function generateNumberList(limit) {
  let numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  return numbers;
}



// For loop
for (let i = 0; i < 3; i++) {
  console.log("For loop count:", i);
}

// While loop
let counter = 0;
while (counter < 3) {
  console.log("While loop count:", counter);
  counter++;
}



// Display greeting when button is clicked
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = displayGreeting(userName);
});

// Generate list of numbers in the DOM
document.getElementById("listBtn").addEventListener("click", function() {
  let ul = document.getElementById("numberList");
  ul.innerHTML = ""; // Clear old list
  let nums = generateNumberList(5);
  nums.forEach(num => {
    let li = document.createElement("li");
    li.textContent = `Number: ${num}`;
    ul.appendChild(li);
  });
});

//Change background color
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "#9a9aceff" : "lightyellow";
});
