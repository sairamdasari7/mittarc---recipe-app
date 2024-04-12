import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import About from './components/About/About';
import Register from './components/Register/Register';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import Bookmark from './components/Bookmark/Bookmark';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
          <Routes>
            
            <Route exact path="/" element={<RecipeList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<RecipeList />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/bookmarks" element={<Bookmark />} /> 
            </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
