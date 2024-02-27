import HeaderLogo from "../asserts/logo.png";
import "../App.css";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img src={HeaderLogo} alt="logo" />
    </header>
  );
}
