import React from "react";
import {Link} from "react-router-dom";

function Header() {

    return (
    <header style = {headerStyle}>
        <h4>My Todo List</h4>

        {/* /home --- name of router linked */}

        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link> 
    </header>
    );


  
}


const headerStyle = {
    background: 'teal',
    color: '#ffff',
    textAlign: 'center',
    padding: '10px',
    fontSize: '3rem',
    fontWeight: 'bold'
}


const linkStyle = {
    color: "#fff",
    TextDecoration: "none",
    fontSize: "25px"

};


export default Header;