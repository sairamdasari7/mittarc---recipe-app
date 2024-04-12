// frontend/src/components/Bookmark.js
import React from 'react';
import './Bookmark.css';


class Bookmark extends React.Component {
  state = {
    bookmarks: []
  };

  componentDidMount() {
    // Here you would typically make an API call to fetch user's bookmarks
    // Update the state with the fetched bookmarks
    const bookmarks = []; // Placeholder for fetched bookmarks
    this.setState({ bookmarks });
  }

  render() {
    return (
      <div className="bookmark-container">
        <h2>Bookmarks</h2>
        <ul>
          {this.state.bookmarks.map(bookmark => (
            <li key={bookmark.id}>{bookmark.recipeName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Bookmark;
