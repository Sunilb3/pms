import React from 'react'
import img1 from '../images/hgh.jpg';
import UserTable from '../view/components/Users/UserTable';
import './Header.css';



export default function Header() {
  return (
    <div className="App">

       <header className="app-header">
       <div className="navbar">

        <div className="logo-container">

        <img src={img1} alt="" />
        </div>

<h1 className="app-title">Patient Management System</h1>
<form className="search-form">
            <input type="text" placeholder="Search" className="search-bar" />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
<ul className="nav-links">
<li className="active"><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
</header>
<UserTable/>
</div>


    
  );
}