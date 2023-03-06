import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UsersComponent from "./components/UsersComponent";
import { geDataBirthDay } from "./helpers/ComonFunction";

function App() {
  //console.log(new Date())
  geDataBirthDay()
  return <div className="App">
<UsersComponent/>

  </div>;
}

export default App;
