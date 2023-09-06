import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/playlist/:id" component={Playlist}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
