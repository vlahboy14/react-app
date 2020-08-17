import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Friends from "./Components/Friends/Friends";

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar namesData={props.state.sidebar.items} />
      
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() =>
          <Dialogs dialogsPage={props.state.dialogsPage} />} />

        <Route path="/profile" render={() =>
          <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>} />

        <Route path="/news" />

        <Route path="/music" />

        <Route path="/settings" />

        <Route path="/friends" render={() => <Friends />} />
      </div>
    </div>
  );
};

export default App;
