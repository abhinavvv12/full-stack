// CONFIGURATION & GLOBAL STATE
const API_URL = "http://localhost:5000";

let isLogin = true;
let currentUser = "";
// 1. AUTHENTICATION UI TOGGLE (Login vs Register)
function toggleForm(){
    isLogin = !isLogin;

    const formTitle = document.getElementById("formTitle");
    const switchBtn = document.querySelector(".switch-btn");
    const messageDiv = document.getElementById("message");

    if (formTitle) formTitle.innerHTML = isLogin ? "Login" : "Register";
    if (switchBtn) switchBtn.innerHTML = isLogin ? "Switch to Register" : "Switch to Login";
    if (messageDiv) messageDiv.innerHTML = "";
}
// 2. AUTHENTICATION SUBMISSION (Form Handler)
document.getElementById("authForm").addEventListener("submit", async function(e){
    e.preventDefault();

    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const url = isLogin ? `${API_URL}/login` : `${API_URL}/register`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        const messageDiv = document.getElementById("message");
        if (messageDiv) messageDiv.innerHTML = data.message;

        if (data.success && isLogin) {
            currentUser = email;
            showDashboard();
        }
    }
    catch(error) {
        console.error("Auth Error:", error);
        const messageDiv = document.getElementById("message");
        if (messageDiv) messageDiv.innerHTML = "Server Error connecting to API.";
    }
});
// 3. NAVIGATION & VIEW PANEL CONTROLS
function showDashboard(){
    const authContainer = document.getElementById("authContainer");
    const appContainer = document.getElementById("appContainer");

    if (authContainer) authContainer.classList.add("hidden");
    if (appContainer) appContainer.classList.remove("hidden");
    
    // Explicitly make sure the dashboard section view is shown first
    showSection('dashboardSection');
    
    // Load the user's dataset
    loadTransactions();
}

function showSection(sectionId){
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove("hidden");
    } else {
        console.error(`Section with ID '${sectionId}' was not found in HTML.`);
    }
}
// 4. CHART.JS INITIALIZATION (Global Window Hook)
const chartCanvas = document.getElementById("pieChart");
if (chartCanvas) {
    window.ctx = chartCanvas.getContext("2d");
    window.pieChart = new Chart(window.ctx, {
        type: "pie",
        data: {
            labels: ["Food", "Transport", "Shopping", "Bills", "Others"],
            datasets: [{
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    "#4285F4",
                    "#34A853",
                    "#FBBC05",
                    "#EA4335",
                    "#7E57C2"
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
} else {
    console.error("Could not find element 'pieChart' to attach ChartJS.");
}
// 5. ADD TRANSACTION ACTION
async function addTransaction(){
    try {
        const titleElement = document.getElementById("title");
        const amountElement = document.getElementById("amount");
        const typeElement = document.getElementById("type");
        const categoryElement = document.getElementById("category");

        const title = titleElement ? titleElement.value.trim() : "";
        const amount = amountElement ? amountElement.value.trim() : "";
        const type = typeElement ? typeElement.value : "expense";
        const category = categoryElement ? categoryElement.value : "Others";

        if (title === "" || amount === "") {
            alert("Please fill all fields");
            return;
        }

        const response = await fetch(`${API_URL}/addTransaction`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: currentUser,
                title,
                amount: parseFloat(amount), // Force numeric translation
                type,
                category
            })
        });

        const data = await response.json();

        if (data.success) {
            clearForm();
            await loadTransactions();
            showSection("dashboardSection"); // Teleports view smoothly back to dashboard
        } else {
            alert("Failed to save transaction backend-side.");
        }
    }
    catch(error) {
        console.error("Add Transaction Error:", error);
    }
}
// 6. LOAD TRANSACTIONS & UPDATE METRIC CARDS
async function loadTransactions(){
    try {
        if (!currentUser) {
            console.warn("Skipping transaction load: No user currently identified.");
            return;
        }

        const response = await fetch(`${API_URL}/transactions/${currentUser}`);
        const data = await response.json();

        const list = document.getElementById("transactionList");
        if (list) list.innerHTML = "";

        let income = 0;
        let expense = 0;

        let categoryData = {
            Food: 0,
            Transport: 0,
            Shopping: 0,
            Bills: 0,
            Others: 0
        };

        // Securely check if the response contains an array of transactions
        if (data && Array.isArray(data) && data.length > 0) {
            data.forEach(item => {
                const li = document.createElement("li");

                li.innerHTML = `
                    <div>
                        <strong>${item.title}</strong><br>
                        ₹${item.amount} - ${item.category} (${item.type.toUpperCase()})
                    </div>
                    <button onclick="deleteTransaction(${item.id})">
                        Delete
                    </button>
                `;

                if (list) list.appendChild(li);

                // Perform safe mathematical typecasting
                const itemAmount = Number(item.amount);

                if (item.type === "income") {
                    income += itemAmount;
                } else {
                    expense += itemAmount;
                    // Only stack chart analytics against Expenses
                    if (categoryData[item.category] !== undefined) {
                        categoryData[item.category] += itemAmount;
                    }
                }
            });
        } else {
            if (list) {
                list.innerHTML = "<li style='justify-content: center; color: #777;'>No transactions found. Add one above!</li>";
            }
        }

        // DOM Card Calculations Safety Injection
        const incomeCard = document.getElementById("income");
        const expenseCard = document.getElementById("expense");
        const balanceCard = document.getElementById("balance");

        if (incomeCard) incomeCard.innerHTML = `₹${income}`;
        if (expenseCard) expenseCard.innerHTML = `₹${expense}`;
        if (balanceCard) balanceCard.innerHTML = `₹${income - expense}`;

        // Safe Chart Component Syncing
        if (window.pieChart && window.pieChart.data && window.pieChart.data.datasets[0]) {
            window.pieChart.data.datasets[0].data = [
                categoryData.Food,
                categoryData.Transport,
                categoryData.Shopping,
                categoryData.Bills,
                categoryData.Others
            ];
            window.pieChart.update();
        }
    }
    catch(error) {
        console.error("Load Transactions Error:", error);
    }
}
// 7. DELETE TRANSACTION ACTION
async function deleteTransaction(id){
    try {
        const response = await fetch(`${API_URL}/deleteTransaction/${id}`, {
            method: "DELETE"
        });
        
        const data = await response.json();
        if (data.success) {
            loadTransactions(); // Reload layout updates instantly
        }
    }
    catch(error) {
        console.error("Delete Transaction Error:", error);
    }
}
// 8. FORM SANITIZATION & APPLICATION LOGOUT
function clearForm(){
    const title = document.getElementById("title");
    const amount = document.getElementById("amount");
    if (title) title.value = "";
    if (amount) amount}