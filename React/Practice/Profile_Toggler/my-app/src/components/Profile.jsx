import React from "react";
import "./Profile.css";
import jeshika from '../assets/jeshika.jpg'

const Profile = () => {
  return (
    <div className="profile-card">
      <img
        src={jeshika}
        alt="Profile"
        className="profile-img"
      />
      <h2>Jeshika Sharma</h2>
      <p>Email: jeshikaa31@gmail.com</p>
      <p>Frontend Developer passionate about React</p>
    </div>
  );
};

export default Profile;
