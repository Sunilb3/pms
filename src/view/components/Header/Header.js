import React from "react";
import logo from "../../assets/images/logo.jpg";
import Button from "../Button/Button";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <div className="main-head">
        <header className="header">
          <div className="logo">
            <a href="home" className="link">
              <img src={logo} alt="logo_image" />
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
            <ul className="nav-links">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li className="active">
                <a href="#">About</a>
              </li>
              <li className="active">
                <Link to="/login">Services</Link>
              </li>
              <li className="active">
                {isAuthenticated && <p>{user.name}</p>}
              </li>
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={() =>
                      logout({
                        returnTo: window.location.origin,
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
