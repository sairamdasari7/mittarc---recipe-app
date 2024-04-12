// backend/routes/bookmarks.js
const express = require('express');
const router = express.Router();

// Mock bookmarks data (in a real application, you would fetch bookmarks from a database)
let bookmarks = [];

// Get bookmarks route
router.get('/', (req, res) => {
  res.json(bookmarks);
});

// Add bookmark route
router.post('/', (req, res) => {
  const { userId, recipeId, recipeName } = req.body;
  const bookmark = { userId, recipeId, recipeName };
  bookmarks.push(bookmark);
  res.json(bookmark);
});

module.exports = router;
