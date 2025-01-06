const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('Form Data Received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
