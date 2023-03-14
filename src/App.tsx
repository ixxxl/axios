import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UsersComponent from "./components/UsersComponent";
import { geDataBirthDay } from "./helpers/ComonFunction";
import { WrapperDialog } from "./components/WrapperDialog";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <UsersComponent />
=======
      <Suspense fallback={<p>Loading...</p>}>
        <UsersComponent />
      </Suspense>
>>>>>>> HookForm
    </div>
  );
}

export default App;
