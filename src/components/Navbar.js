import React from 'react';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from 'react-bootstrap/Navbar'; 
import Nav  from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container  from 'react-bootstrap/Container';

function NavBar() {
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <div className="contain">
          <a href="#home" className="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <a href="#SignUp" className="lastEle">
          Sign as Mentor
        </a>
        <a 
          className="icon" 
          onClick={() => myFunction()}>
          Menu
        </a>
      </div>
    </>
  );
}

export default NavBar;
