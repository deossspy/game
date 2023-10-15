document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get username, password, and initial cookieValue from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const initialCookieValue = 0; // You can set an initial value for cookieValue

        // Check if username and password meet your criteria (e.g., minimum length)
        if (username.length >= 5 && password.length >= 8) {
            // Save username, password, and initial cookieValue in localStorage
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("cookieValue", initialCookieValue);

            alert("Signup successful! You can now login.");
            // Redirect to login page or perform other actions after successful signup
            window.location.href = "login.html";
        } else {
            alert("plis mek sure your jusername has at least 5 characters and your password has at least 8 characters");
        }
    });
});
