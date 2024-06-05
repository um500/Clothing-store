document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login logic here
    // On successful login:
    loggedIn = true;
    alert('Login successful!');
    window.location.href = 'index.html';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform registration logic here
    // On successful registration:
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
});
