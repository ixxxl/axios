import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UsersComponent from "./components/UsersComponent";
import { geDataBirthDay } from "./helpers/ComonFunction";
import { WrapperDialog } from "./components/WrapperDialog";

function App() {
  

  return <div className="App">
<UsersComponent/>


  </div>;
}

export default App;
