// Login credentials
const correctUsername = "Fritz";
const correctPassword = "Fritz123";

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem("isLoggedIn", true); // Store session
        window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
        document.getElementById("error-message").innerText = "Invalid login credentials!";
    }
});

// Handle logout
function logout() {
    localStorage.removeItem("isLoggedIn");  // Remove session
    window.location.href = "index.html";    // Redirect to login page
}

// Handle task tracking
function addClass() {
    const classSchedule = document.getElementById("classSchedule").value;
    alert(`Class ${classSchedule} added!`);
}

// Handle health tracking
function trackWater() {
    const waterIntake = document.getElementById("waterIntake").value;
    alert(`Water intake: ${waterIntake}L tracked!`);
}

function trackSleep() {
    const sleepHours = document.getElementById("sleepHours").value;
    alert(`Sleep: ${sleepHours} hours tracked!`);
}

// Handle mood tracking
function trackMood() {
    const mood = document.getElementById("moodSelect").value;
    alert(`Mood: ${mood} tracked!`);
}

// Handle habit tracking
function trackHabit() {
    const habit = document.getElementById("habitInput").value;
    alert(`Habit: ${habit} tracked!`);
}

// Handle peer support
function sendPeerSupport() {
    const supportMessage = document.getElementById("peerSupport").value;
    alert(`Peer Support Message Sent: ${supportMessage}`);
}
