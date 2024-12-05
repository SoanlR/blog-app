import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';
import Favorites from './components/Favorite';

function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" exact element={<PostList/>} />
        <Route path="/post/:id" element={<PostDetails/>} />
        <Route path="/favorites" element={<Favorites/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;