// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     },3000);
// }


//  Fetch API ( Example to Understand the need of async-await function)
// Scenario:
// Prepare url/ api endpoint -> sync
// fetch data -> network vall -> async (mark as 'async' to make it work like synchronous )
// process data -> sync

async function getData() {

    // get request -async
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // parse json -async
    let data = await response.json();
    console.log(data);
}
getData();









// ===============================================
// 🌐 ASYNC / AWAIT + FETCH API COMPLETE REFERENCE
// ===============================================

// ---------------------------
// 1️⃣ Understanding Asynchronous Behavior
// ---------------------------

// JavaScript executes code line by line (synchronously).
// But some tasks like network calls, timers, or file reads take time.
// These are handled asynchronously using Promises or async/await.

console.log("Start");

setTimeout(function () {
  console.log("I am inside setTimeout block (runs after 3 seconds)");
}, 3000);

console.log("End (runs before setTimeout finishes)");


// ---------------------------
// 2️⃣ Async Function Basics
// ---------------------------

// Declaring an async function automatically makes it return a Promise.
async function greet() {
  return "Hello, Abhinav!";
}

// Calling async function
greet().then(message => console.log(message)); // Output: Hello, Abhinav!


// ---------------------------
// 3️⃣ Await Keyword
// ---------------------------

// Await pauses execution until the Promise resolves.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demoAwait() {
  console.log("Waiting for 2 seconds...");
  await delay(2000); // Pauses here for 2 seconds
  console.log("Done waiting!");
}

demoAwait();


// ---------------------------
// 4️⃣ Fetch API - GET Request
// ---------------------------

// Fetch API is used to make HTTP requests (GET, POST, PUT, DELETE).
// It returns a Promise that resolves to a Response object.

async function getData() {
  try {
    // Step 1: Fetch data from API (asynchronous)
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // Step 2: Parse JSON (also asynchronous)
    let data = await response.json();

    // Step 3: Use the data (synchronous)
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();


// ---------------------------
// 5️⃣ Fetch API - POST Request
// ---------------------------

async function createUser() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST', // HTTP method
      headers: {
        'Content-Type': 'application/json' // Sending JSON data
      },
      body: JSON.stringify({
        name: 'Abhinav',
        email: 'abhinav@example.com'
      })
    });

    let data = await response.json();
    console.log("User Created:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUser();


// ---------------------------
// 6️⃣ Handling HTTP Errors
// ---------------------------

async function fetchWithErrorHandling() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');

    // Check if response is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchWithErrorHandling();


// ---------------------------
// 7️⃣ Multiple Fetch Calls Together
// ---------------------------

async function fetchMultiple() {
  try {
    // Run multiple requests in parallel using Promise.all
    const [postsResponse, commentsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();

    console.log("Posts:", posts.slice(0, 3)); // Show first 3 posts
    console.log("Comments:", comments.slice(0, 3)); // Show first 3 comments
  } catch (error) {
    console.error("Error fetching multiple resources:", error);
  }
}

fetchMultiple();


// ---------------------------
// 8️⃣ Summary Cheat Sheet
// ---------------------------

// ✅ async → makes a function return a Promise.
// ✅ await → pauses execution until Promise resolves.
// ✅ try...catch → handles errors gracefully.
// ✅ fetch(url) → returns a Promise with Response.
// ✅ response.json() → parses JSON, returns Promise.
// ✅ response.ok → true if status is 200–299.
// ✅ Promise.all → run multiple async tasks in parallel.


// ---------------------------
// 9️⃣ Execution Flow (Conceptual)
// ---------------------------
// async function → returns Promise
//       |
//       v
// await Promise → pauses until resolved/rejected
//       |
//       v
// try...catch → handles errors gracefully
//       |
//       v
// fetch(url) → returns Response object
//       |
//       v
// response.json() → returns parsed data
// ===============================================
