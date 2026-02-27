import React from "react";
import { useState } from 'react'
import "./Book.css";

const Book = (props) => {
  return (
    <div className="book">
      <div className="Details">
        <p>Name : {props.Name}</p>
        <p>Age : {props.Age}</p>
        <p>Course : {props.Course}</p>
      </div>
      
      <div className="cover">
        <img src={props.Image} alt={props.title} className="student-img" />
      </div>
    </div>
  );
};

export default Book;
