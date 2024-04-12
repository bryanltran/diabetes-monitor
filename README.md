# Diabetes Monitoring System Documentation

## Overview

The Diabetes Monitoring System is a web application designed to help users monitor their blood glucose levels. This system includes functionalities such as user login, submitting blood glucose readings, viewing past readings in a dashboard, and accessing help content.

---

## File Structure

The system comprises three main files:

1. **index.html:** This file contains the HTML structure of the web application, including the login form, dashboard, help section, and tables for displaying data.
2. **styles.css:** This file contains the CSS styles that define the appearance and layout of the web application.
3. **script.js:** This file contains the JavaScript functions responsible for handling user interactions and implementing application logic.

---

## HTML Structure (index.html)

### General Structure

The `index.html` file starts with the standard HTML5 doctype declaration and includes the necessary meta tags for character set and viewport settings.

### Body Content

1. **Header Section:** Includes the title "Diabetes Monitoring System" and a link to the external CSS file `styles.css`.

2. **Container Div:** Contains the main content of the web application, including headings, login form, dashboard, help section, and tables.

3. **Login Form:** Provides a dropdown for selecting a user, a login button, and a hidden input field to store the selected user's name.

4. **Dashboard:** Displays user information, input field for blood glucose readings, and buttons for submitting readings and logging out.

5. **Help Section:** Contains a button to toggle the visibility of help content, which includes instructions for using the application.

6. **Tables:** Separate tables are included for displaying glucose readings specific to each user ("Sara Norman" and "Gregg Norman").

---

## CSS Styles (styles.css)

### General Styles

- Sets the font family, background color, margin, and padding for the entire document.
- Defines a container with a maximum width, margin, padding, background color, box shadow, and border radius.

### Login Form Styles

- Styles the login form, dropdown select, login button, and hidden input field.
- Defines styles for the tooltip associated with the login button.

### Dashboard Styles

- Styles the dashboard section, headings, user information, input fields, and buttons.

### Help Section Styles

- Styles the help section, help button, and help content container.
- Defines styles for the tooltip associated with the help button.

### Table Styles

- Sets styles for tables, table headers, table rows, alternating row colors, and hover effects.

### Tooltip Styles

- Defines styles for tooltips, including tooltip text visibility, background color, text color, position, and transition effects.

---

## JavaScript Functions (script.js)

### Login Function

- Retrieves the selected user from the dropdown and displays the dashboard while hiding the login form.
- Sets user-specific information such as user ID and selected user in hidden input.

### Submit Reading Function

- Handles the submission of blood glucose readings.
- Validates input range (0-999) and alerts the user for invalid inputs.
- Displays the reading in a table within the dashboard.

### Logout Function

- Handles the logout functionality by hiding the dashboard and displaying the login form.

### Toggle Help Function

- Toggles the visibility of help content in the help section based on the current display status of the dashboard.

---

## Conclusion

The Diabetes Monitoring System provides an intuitive interface for users to log in, submit blood glucose readings, view past readings, and access help content. The HTML structure, CSS styles, and JavaScript functions work together to create a functional and user-friendly web application for managing diabetes-related data.
