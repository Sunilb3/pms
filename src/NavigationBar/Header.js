import React from "react";
import img1 from "../images/hgh.jpg";
import Button from "../view/components/Button/Button";
import UserTable from "../view/components/Users/UserTable";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <div className="main-head">
        <header className="header">
          <div className="logo">
            <a href="home" className="link">
              <img src={img1} alt="logo_image" />
            </a>
          </div>
          <nav className="nav">
            <h1>Patient Management System</h1>

            <div className="search">
              <input type="text" placeholder="Search" />
              <Button
                name="Search"
                className="button button--secondaryButton"
              />
            </div>

            <div className="links">
              <a href="about" className="link">
                About
              </a>
              <a href="contact" className="link">
                Contact
              </a>
            </div>
          </nav>
        </header>
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  );
}
