// Show Register Screen
document.getElementById('to-register').addEventListener('click', function() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('register-screen').classList.remove('hidden');
});

// Show Login Screen
document.getElementById('to-login').addEventListener('click', function() {
    document.getElementById('register-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
});

// Registration Logic
document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const role = document.getElementById('register-role').value;

    if (email && password) {
        const userData = {
            email: email,
            password: password,
            role: role
        };

        // Store the user data in localStorage (you can store multiple users, but for now, we store just one)
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Registration Successful!');
        document.getElementById('register-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
    } else {
        alert('Please fill in all fields.');
    }
});

// Login Logic
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const role = document.getElementById('login-role').value;

    // Get the user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && email === userData.email && password === userData.password && role === userData.role) {
        alert('Login Successful!');
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('parking-screen').classList.remove('hidden');
    } else {
        alert('Invalid credentials or role.');
    }
});

// Logout Logic
document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('parking-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
});

// Parking Spot Logic
document.querySelectorAll('.parking-spot').forEach(spot => {
    spot.addEventListener('click', function() {
        if (spot.classList.contains('parked')) {
            const confirmUnpark = confirm(`Do you want to unpark from spot ${spot.textContent}?`);
            if (confirmUnpark) {
                spot.classList.remove('parked');
            }
        } else {
            const confirmPark = confirm(`Do you want to park in spot ${spot.textContent}?`);
            if (confirmPark) {
                spot.classList.add('parked');
            }
        }
    });
});
