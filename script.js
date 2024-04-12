// Login function
function login() {
    const userSelect = document.getElementById('userSelect');
    const selectedUser = userSelect.options[userSelect.selectedIndex].value;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('userName').textContent = selectedUser;
    
    // Update patient ID based on selected user
    let userID;
    if (selectedUser === 'Sara Norman') {
        userID = '5344-9709';
    } else if (selectedUser === 'Gregg Norman') {
        userID = '1275-4307';
    }
    document.getElementById('userID').textContent = userID;
    
    document.getElementById('selectedUser').value = selectedUser; // Set selected user in hidden input
}

// Submit blood glucose reading function (dummy function without actual logic)
function submitReading() {
    const bgReading = document.getElementById('bgReading').value;
    alert(`Blood glucose reading submitted: ${bgReading}`);
}

// Logout function (dummy function without actual logout logic)
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Toggle help content visibility
function toggleHelp() {
    const helpContent = document.getElementById('helpContent');
    helpContent.style.display = helpContent.style.display === 'block' ? 'none' : 'block';
}


// Dummy data for patient glucose level ranges
const patientRanges = {
    'Sara Norman': { low: 80, normal: { min: 80, max: 140 }, high: 140 },
    'Gregg Norman': { low: 70, normal: { min: 70, max: 120 }, high: 120 }
};

// Submit blood glucose reading function
function submitReading() {
    const userName = document.getElementById('selectedUser').value; // Fetch selected user's name
    const bgReadingInput = document.getElementById('bgReading').value;
    const bgReading = parseInt(bgReadingInput);

    // Validate input range (0-999)
    if (isNaN(bgReading) || bgReading < 0 || bgReading > 999) {
        alert("Invalid input! Please enter a number between 0 and 999 for the blood glucose reading.");
        return; // Exit function if input is invalid
    }

    // Determine patient's glucose level ranges
    const ranges = patientRanges[userName];

    // Dummy table for displaying results
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>User</th> <!-- Added user column -->
            <th>Date</th>
            <th>Reading</th>
        </tr>
        <tr>
            <td>${userName}</td> <!-- Display user's name -->
            <td>${new Date().toLocaleDateString()}</td>
            <td>${bgReading}</td>
        </tr>
    `;

    // Append the table to the dashboard container
    const dashboard = document.getElementById('dashboard');
    dashboard.appendChild(table);

    // Display pop-up based on reading
    if (bgReading < ranges.low) {
        // Simulate a prompt with an input field
        alert("Your blood sugar is low. Please eat a sugar source, take your medicine, and follow your doctor's advice on meals and snacks.");
        const reasonInput = prompt("Your blood sugar is low. Please provide a reason:");
        if (reasonInput) {
            // Use console.log for debugging
            console.log(`Reason for low reading: ${reasonInput}\nPlease eat a sugar source, take your medicine, and follow your doctor's advice on meals and snacks.`);
        }
    } else if (bgReading >= ranges.normal.min && bgReading <= ranges.normal.max) {
        alert("Your blood sugar is within a normal range.");
        console.log("Your blood sugar is within a normal range.");
    } else if (bgReading > ranges.high) {
        // Blood sugar is high, notify the user to call their doctor
        const doctorName = userName === 'Sara Norman' ? 'Dr. Jason Rosenberg' : 'Dr. Nikhil Singh';
        const doctorPhone = userName === 'Sara Norman' ? '579-0432' : '334-2309';
        
        alert(`Your blood sugar is high. Please call your doctor (${doctorName}) immediately at ${doctorPhone}.`);
        
        // Ask about ketones in urine
        const ketonesConfirmation = confirm("Do you have a presence of ketones in your urine?");
        let ketonesText = "No";
        if (ketonesConfirmation) {
            ketonesText = "Yes";
        }
        // Use console.log for debugging
        console.log(`Ketones in Urine: ${ketonesText}`);
    }
}




function toggleHelp() {
    const helpContent = document.getElementById('helpContent');
    const isDashboard = document.getElementById('dashboard').style.display === 'block';

    if (isDashboard) {
        helpContent.innerHTML = `
            <h3>Dashboard Help</h3>
            <p>Welcome to the Dashboard Help section!</p>
            <p>This section provides guidance on using the dashboard features:</p>
            <ul>
                <li>> View your past glucose readings.</li>
                <li>> Input your Glucose Levels as a number 0-999 and hit Submit</li>
                <li>> Click the logout button to go back</li>
            </ul>
        `;
    } else {
        helpContent.innerHTML = `
            <h3>Login Screen Help</h3>
            <p>Welcome to the Login Screen Help section!</p>
            <p>Here are some instructions to get started:</p>
            <ul>
                <li>> Select a user from the dropdown.</li>
                <li>> Press the Login Button</li>
                <li>> Login to access the dashboard.</li>
            </ul>
        `;
    }

    helpContent.style.display = helpContent.style.display === 'block' ? 'none' : 'block';
}

