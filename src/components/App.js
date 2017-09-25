import React, { Component } from "react";
import "../styles/App.css";

import NavBar from "./NavBar.js";
import PlayListForm from "./PlayListForm.js";
import PlayList from "./PlayList.js";

class App extends Component {
  "use strict";

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}
export default App;
