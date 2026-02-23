import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Input = () => {
  const { setName } = useContext(UserContext);

  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Input;
