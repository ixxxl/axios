import React, { Suspense, useState } from "react";
<<<<<<< HEAD
=======
import logo from "./logo.svg";
>>>>>>> 8e290228a1f5a4b910d0106e7baa5187ff3df315
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
