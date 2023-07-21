import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import Button from "../Button/Button";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const [isTokenRetrieved, setIsTokenRetrieved] = useState(false);

  useEffect(() => {
    const retrieveToken = async () => {
      if (isAuthenticated && !isTokenRetrieved) {
        setIsTokenRetrieved(true);
        const token = await getAccessTokenSilently();
        sessionStorage.setItem("accessToken", token);
        sessionStorage.setItem("isAuthenticated", isAuthenticated);
        sessionStorage.setItem("userPic", user.picture);
      }
    };
    retrieveToken();
  }, [isAuthenticated, isTokenRetrieved, getAccessTokenSilently]);

  const handleLogin = async () => {
    loginWithRedirect({
      redirectUri: window.location.origin + "/dashboard",
    });
  };

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
    sessionStorage.clear();
  };

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
              <Button name="Search" className="button button--primaryButton" />
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
              <div className="logo">
                {user || sessionStorage.getItem("userPic") ? (
                  <img
                    src={sessionStorage.getItem("userPic") || user.picture}
                    alt={"profile_pic"}
                  />
                ) : null}
              </div>
              {isAuthenticated ||
              sessionStorage.getItem("isAuthenticated") === "true" ? (
                <li>
                  <Button
                    name="Log Out"
                    onClick={() => handleLogout()}
                    className="button button--primaryButton"
                  />
                </li>
              ) : (
                <li>
                  <Button
                    name="Log In"
                    onClick={() => handleLogin()}
                    className="button button--primaryButton"
                  />
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
