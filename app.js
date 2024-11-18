document.getElementById('login-btn').addEventListener('click', function() {
    const companyId = document.getElementById('company-id').value;
    const plateNumber = document.getElementById('plate-number').value;

    // Simple validation to check if the fields are not empty
    if (companyId && plateNumber) {
        // Hide login screen and show parking screen
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('parking-screen').classList.remove('hidden');
    } else {
        alert('Please enter both Company ID and Plate Number.');
    }
});

// Parking spot click event
document.querySelectorAll('.parking-spot').forEach(spot => {
    spot.addEventListener('click', function() {
        // If already parked, unpark it
        if (spot.classList.contains('parked')) {
            const confirmUnpark = confirm(`Do you want to unpark from spot ${spot.textContent}?`);
            if (confirmUnpark) {
                spot.classList.remove('parked');  // Change back to green
            }
        } else {
            // If not parked, prompt to park
            const confirmPark = confirm(`Do you want to park in spot ${spot.textContent}?`);

            if (confirmPark) {
                // Park in the spot and change color to red
                spot.classList.add('parked');

                // Start a timer
                let timeRemaining = 10; // Timer in seconds
                const timerInterval = setInterval(function() {
                    timeRemaining--;
                    if (timeRemaining <= 0) {
                        clearInterval(timerInterval);
                    }
                }, 1000);
            }
        }
    });
});
