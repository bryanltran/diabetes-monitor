// Login function
function login() {
    const userSelect = document.getElementById('userSelect');
    const selectedUser = userSelect.options[userSelect.selectedIndex].value;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('userName').textContent = selectedUser;
    
    let userID;
    if (selectedUser === 'Sara Norman') {
        userID = '5344-9709';
    } else if (selectedUser === 'Gregg Norman') {
        userID = '1275-4307';
    }
    document.getElementById('userID').textContent = userID;
    
    document.getElementById('selectedUser').value = selectedUser;
}

// Submit blood glucose reading function
function submitReading() {
    const bgReading = document.getElementById('bgReading').value;
    alert(`Blood glucose reading submitted: ${bgReading}`);
}

// Logout function
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Toggle help content visibility
function toggleHelp() {
    const helpContent = document.getElementById('helpContent');
    helpContent.style.display = helpContent.style.display === 'block' ? 'none' : 'block';
}

const patientRanges = {
    'Sara Norman': { low: 80, normal: { min: 80, max: 140 }, high: 140 },
    'Gregg Norman': { low: 70, normal: { min: 70, max: 120 }, high: 120 }
};

// Submit blood glucose reading function
function submitReading() {
    const userName = document.getElementById('selectedUser').value;
    const bgReadingInput = document.getElementById('bgReading').value;
    const bgReading = parseInt(bgReadingInput);

    if (isNaN(bgReading) || bgReading < 0 || bgReading > 999) {
        alert("Invalid input! Please enter a number between 0 and 999 for the blood glucose reading.");
        return;
    }

    const ranges = patientRanges[userName];

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>User</th>
            <th>Date</th>
            <th>Reading</th>
        </tr>
        <tr>
            <td>${userName}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>${bgReading}</td>
        </tr>
    `;

    const dashboard = document.getElementById('dashboard');
    dashboard.appendChild(table);

    if (bgReading < ranges.low) {
        alert("Your blood sugar is low. Please eat a sugar source, take your medicine, and follow your doctor's advice on meals and snacks.");
        const reasonInput = prompt("Your blood sugar is low. Please provide a reason:");
        if (reasonInput) {
            console.log(`Reason for low reading: ${reasonInput}\nPlease eat a sugar source, take your medicine, and follow your doctor's advice on meals and snacks.`);
        }
    } else if (bgReading >= ranges.normal.min && bgReading <= ranges.normal.max) {
        console.log("Your blood sugar is within a normal range.");
    } else if (bgReading > ranges.high) {
        const doctorName = userName === 'Sara Norman' ? 'Dr. Jason Rosenberg' : 'Dr. Nikhil Singh';
        const doctorPhone = userName === 'Sara Norman' ? '579-0432' : '334-2309';
        
        alert(`Your blood sugar is high. Please call your doctor (${doctorName}) immediately at ${doctorPhone}.`);
        
        const ketonesConfirmation = confirm("Do you have a presence of ketones in your urine?");
        let ketonesText = "No";
        if (ketonesConfirmation) {
            ketonesText = "Yes";
        }
        console.log(`Ketones in Urine: ${ketonesText}`);
    }
}

// Toggle help content visibility
function toggleHelp() {
    const helpContent = document.getElementById('helpContent');
    const isDashboard = document.getElementById('dashboard').style.display === 'block';

    if (isDashboard) {
        helpContent.innerHTML = `
            <h3>Dashboard Help</h3>
            <p>Welcome to the Dashboard Help section!</p>
            <p>This section provides guidance on using the dashboard features:</p>
            <ul>
                <li>View your past glucose readings.</li>
                <li>Input your Glucose Levels as a number 0-999 and hit Submit</li>
                <li>Click the logout button to go back</li>
            </ul>
        `;
    } else {
        helpContent.innerHTML = `
            <h3>Login Screen Help</h3>
            <p>Welcome to the Login Screen Help section!</p>
            <p>Here are some instructions to get started:</p>
            <ul>
                <li>Select a user from the dropdown.</li>
                <li>Press the Login Button</li>
                <li>Login to access the dashboard.</li>
            </ul>
        `;
    }

    helpContent.style.display = helpContent.style.display
}