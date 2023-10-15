document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get username and password from the form
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Retrieve user credentials and cookieValue from localStorage
        const savedUsername = sessionStorage.getItem("username");
        const savedPassword = sessionStorage.getItem("password");
        const savedCookieValue = parseInt(sessionStorage.getItem("cookieValue")) || 0;

        // Check if the entered credentials match the saved credentials
        if (username === savedUsername && password === savedPassword) {
            alert("login saksex");

            // Now you can use the savedCookieValue associated with the user
            // For example, you can update it, save it back to localStorage, or use it in your application logic.
            // For demonstration, let's increase the cookieValue by 1 during each login.
            const updatedCookieValue = savedCookieValue + 1;
            sessionStorage.setItem("cookieValue", updatedCookieValue);

            // Redirect to another page or perform actions after successful login
            window.location.href = "fakavajrus.html";
        } else {
            alert("rong jusername or password try again");
        }
    });
});
