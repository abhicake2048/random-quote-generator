import React from "react";
import './footer.css'

function Footer(){
    return (
        <div className="footer">
        <p>&copy; {new Date().getFullYear()} Your Web App</p>
      </div>
    )
}

export default Footer;