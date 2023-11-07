import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../../Images/Logo";

const Navbar = () => {
  return (
    <div className="backgroundColor">
      <div className="logo">
        <Logo />
      </div>
      <Search />
      <Button />
    </div>
  );
};

export default Navbar;
