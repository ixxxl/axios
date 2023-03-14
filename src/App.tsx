import React, { Suspense, useState } from "react";
import "./App.css";

import { geDataBirthDay } from "./helpers/ComonFunction";
import { WrapperDialog } from "./components/WrapperDialog";
import UsersComponent from "./components/UsersComponent";

function App() {
  return (
    <div className="App">
      <UsersComponent />
    </div>
  );
}

export default App;
