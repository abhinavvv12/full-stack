// Select elements
let heading = document.getElementById("main-heading");
let para = document.getElementById("first-para");

// 1️⃣ Direct Style Changes (element.style)
document.getElementById("style-btn").addEventListener("click", function() {
  // Change individual CSS properties
  heading.style.color = "green";          // text color
  heading.style.backgroundColor = "yellow"; // background
  heading.style.fontSize = "30px";        // font size
  heading.style.border = "2px solid black"; // border
});

// 2️⃣ Class Manipulation (classList)
document.getElementById("class-btn").addEventListener("click", function() {
  // Add a class
  heading.classList.add("highlight");

  // Toggle a class (adds if missing, removes if present)
  para.classList.toggle("big-text");

  // Remove a class
  heading.classList.remove("red-bg");

  // Check if a class exists
  if (heading.classList.contains("highlight")) {
    console.log("Heading has highlight class!");
  }
});

// 3️⃣ Get Computed Styles (window.getComputedStyle)
document.getElementById("computed-btn").addEventListener("click", function() {
  let styles = window.getComputedStyle(heading);
  console.log("Heading color:", styles.color);
  console.log("Heading font size:", styles.fontSize);
});

// 4️⃣ Remove Inline Styles
document.getElementById("remove-style-btn").addEventListener("click", function() {
  // Reset styles by clearing the style attribute
  heading.removeAttribute("style");
  console.log("Inline styles removed from heading!");
});
