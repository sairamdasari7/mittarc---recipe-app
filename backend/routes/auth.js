// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Mock users data (in a real application, you would fetch users from a database)
const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' }
];

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Check if user exists
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    // Generate token
    const token = jwt.sign({ userId: user.id }, 'secretkey');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
