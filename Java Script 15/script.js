// Select the box
let box = document.getElementById("box");

// 1️⃣ Move Right (using class toggle + CSS transition)
document.getElementById("move-btn").addEventListener("click", function() {
  box.classList.toggle("move-right");
});

// 2️⃣ Grow (using class toggle + CSS transition)
document.getElementById("grow-btn").addEventListener("click", function() {
  box.classList.toggle("grow");
});

// 3️⃣ Fade Out (using class toggle + CSS transition)
document.getElementById("fade-btn").addEventListener("click", function() {
  box.classList.toggle("fade");
});

// 4️⃣ Bounce (using CSS keyframes + class toggle)
document.getElementById("bounce-btn").addEventListener("click", function() {
  box.classList.toggle("bounce");
});

// 5️⃣ Reset (remove all classes)
document.getElementById("reset-btn").addEventListener("click", function() {
  box.className = ""; // clears all applied classes
});
