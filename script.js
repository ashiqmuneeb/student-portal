
    document.getElementById("login-form").addEventListener("submit", function(event){
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (validateUsername(username) && validatePassword(password)) {
            alert("Login successful");
            // Submit the form
            document.getElementById("login-form").submit();
        } else {
            alert("Invalid Username or Password");
        }
    });

    function validateUsername(username) {
        // Check if the username is not empty and meets the requirements
        if (username.trim() === "") {
            alert("Username is required.");
            return false;
        } else if (!/^[a-zA-Z0-9_]{5,20}$/.test(username)) {
            alert("Username must be alphanumeric and between 5 to 20 characters.");
            return false;
        }
        return true;
    }

    function validatePassword(password) {
        // Check if the password is not empty and meets the requirements
        if (password.trim() === "") {
            alert("Password is required.");
            return false;
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }
        return true;
    }

