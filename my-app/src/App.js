import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PostScreen from './components/PostScreen';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <PostScreen />
    </div>
  );
}

export default App;
