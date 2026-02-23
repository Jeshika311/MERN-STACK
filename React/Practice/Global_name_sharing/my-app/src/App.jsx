import React, { useState } from "react";
import UserContext from "./context/UserContext";
import Input from "./components/Input";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <div className="App">
        <h1>User Name App</h1>
        <Input />
        <Greeting />
      </div>
    </UserContext.Provider>
  );
}

export default App;
