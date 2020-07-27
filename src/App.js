import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() =>
            <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />

          <Route path="/profile" render={() => <Profile postData={props.postData} />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/settings" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
