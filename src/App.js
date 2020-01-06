import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import MyPosts from './Components/Profile/MyPosts/MyPosts';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
