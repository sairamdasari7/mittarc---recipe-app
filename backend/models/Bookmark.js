// backend/models/Bookmark.js
class Bookmark {
    constructor(userId, recipeId, recipeName) {
      this.userId = userId;
      this.recipeId = recipeId;
      this.recipeName = recipeName;
    }
  }
  
  module.exports = Bookmark;
  