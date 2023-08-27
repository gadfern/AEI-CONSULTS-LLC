const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module
const app = express();

app.use(cors()); // Use the cors middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST request for form submission
app.post('/submit', (req, res) => {
    const formData = req.body; // Form data sent from the client

    // Perform validation and processing here
    // You can access formData fields using formData.name, formData.email, etc.
    // Example validation: check if formData.phone has 10 digits
    if (formData.phone.length !== 10) {
        return res.status(400).send('Phone number should be 10 digits.');
    }

    // Additional validation and processing can go here

    // Send a response
    res.send('Form submitted successfully');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});