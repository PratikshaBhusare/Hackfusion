function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful (Dummy functionality)");
        // Here, you can add backend authentication later
    }
}

function register() {
    let role = document.getElementById("role").value;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;

    if (name === "" || address === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert(`Registration successful as a ${role}`);
    window.location.href = "index.html"; // Redirect to login after registering
}
