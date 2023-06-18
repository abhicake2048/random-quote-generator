import React from "react";
import './header.css'

function Header(){
    return (
        <div className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    )
}
export default Header;
