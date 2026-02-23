import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Greeting = () => {
  const { name } = useContext(UserContext);

  return <h2>Welcome, {name || ""}!</h2>;
};

export default Greeting;
