import React, { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleProfile = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="app-container">
      <button className="toggle-btn" onClick={toggleProfile}>
        {isVisible ? "Hide Profile" : "Show Profile"}
      </button>
      {isVisible && <Profile />}
    </div>
  );
}

export default App;
