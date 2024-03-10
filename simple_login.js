
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Fetch input values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Perform login validation (dummy example)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Here you can redirect the user to another page
        } else {
            document.getElementById('errorMessage').innerText = 'Invalid username or password.';
        }
    });