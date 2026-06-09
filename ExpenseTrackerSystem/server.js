const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs"); // Added to prevent crashing on fs.existsSync

// Import Routers
const authRoutes = require("./Routes/AuthRoutes"); 
const transactionRoutes = require("./Routes/TransactionRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MOUNT API ROUTES
app.use("/", authRoutes);
app.use("/", transactionRoutes);

// Dynamically locate the frontend directory regardless of folder case (FrontEnd vs frontend)
// or whether server.js is inside a subfolder or root folder.
let finalFrontendPath = "";

if (fs.existsSync(path.join(__dirname, "FrontEnd"))) {
    finalFrontendPath = path.join(__dirname, "FrontEnd");
} else if (fs.existsSync(path.join(__dirname, "frontend"))) {
    finalFrontendPath = path.join(__dirname, "frontend");
} else if (fs.existsSync(path.join(__dirname, "../FrontEnd"))) {
    finalFrontendPath = path.join(__dirname, "../FrontEnd");
} else if (fs.existsSync(path.join(__dirname, "../frontend"))) {
    finalFrontendPath = path.join(__dirname, "../frontend");
} else {
    // Fallback default
    finalFrontendPath = path.join(__dirname, "FrontEnd");
}

console.log(`[Server Setup] Serving static assets from: ${finalFrontendPath}`);

// Serve static assets (This fixes missing CSS/JS formatting files)
app.use(express.static(finalFrontendPath));

// Serve the HTML file at root
app.get("/", (req, res) => {
    const indexPath = path.join(finalFrontendPath, "index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send("<h1>Error: index.html not found in the frontend folder!</h1>");
    }
});

app.listen(PORT, () => {
    console.log(`Server successfully running on http://localhost:${PORT}`);
});