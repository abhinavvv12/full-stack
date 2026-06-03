// Select elements
let heading = document.getElementById("main-heading");
let para = document.getElementById("first-para");

// 1️⃣ INSERT
document.getElementById("insert-btn").addEventListener("click", function() {
  // Create a new element
  let newDiv = document.createElement("div");
  newDiv.textContent = "I am a new div!";
  newDiv.style.background = "lightyellow";

  // Append it to the body
  document.body.appendChild(newDiv);

  // Insert before the paragraph
  document.body.insertBefore(newDiv, para);
});

// 2️⃣ UPDATE
document.getElementById("update-btn").addEventListener("click", function() {
  // Change text
  heading.textContent = "Updated h2 heading";

  // Change HTML
  para.innerHTML = "<b>Paragraph updated with bold text!</b>";

  // Change style
  heading.style.color = "red";

  // Add a class
  heading.setAttribute("class", "highlight");
});

// 3️⃣ DELETE
document.getElementById("delete-btn").addEventListener("click", function() {
  // Remove the paragraph
  para.remove();

  // Replace heading with a new one
  let newHeading = document.createElement("h2");
  newHeading.textContent = "Heading replaced!";
  document.body.replaceChild(newHeading, heading);
});

// 4️⃣ ACCESS
document.getElementById("access-btn").addEventListener("click", function() {
  // Access by tag name
  let allParas = document.getElementsByTagName("p");
  console.log("All paragraphs:", allParas);

  // Access by class name
  let highlighted = document.getElementsByClassName("highlight");
  console.log("Highlighted elements:", highlighted);

  // Access with querySelector
  let firstPara = document.querySelector("p");
  console.log("First paragraph:", firstPara);

  // Access with querySelectorAll
  let allHeadings = document.querySelectorAll("h2");
  console.log("All h2 headings:", allHeadings);
});


