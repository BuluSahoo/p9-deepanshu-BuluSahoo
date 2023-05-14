import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="Contaner">
      <h1 className="logo" style={{cursor:"pointer"}}>Shortly</h1>
      <div className="feature">
        <h5>Feature</h5>
        <h5>Pricing</h5>
        <h5>Resources</h5>
      </div>
      <div className="login">
        <h5>Login</h5>
        <h5>Sign Up</h5>
      </div>
    </header>
  );
};

export default Header;
