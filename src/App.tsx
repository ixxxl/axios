import React, { Suspense, useState } from "react";
import "./App.css";
import UsersComponent from "./components/UsersComponent";
import { geDataBirthDay } from "./helpers/ComonFunction";
import { WrapperDialog } from "./components/WrapperDialog";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <UsersComponent />
      </Suspense>
    </div>
  );
}

export default App;
