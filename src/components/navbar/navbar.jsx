import React from "react";
import ReactDOM from "react-dom/client";
import "./navbar.css";
import "../bootstrap/bootstrap.min.css";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
  return (
    <>
      <nav className="text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="">START FRAMEWORK</h1>
          <ul className="nav-menu  gap-5 align-items-center fw-bolder">
            <li>ABOUT</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </ul>
          <div className="icon-menu  text-white">
            <FontAwesomeIcon icon={faBars}   />
          </div>
          
        </div>
      </nav>
    </>
  );
}

// const navbar = document.querySelector("nav");
window.addEventListener("scroll", scrollFunction);
 








function scrollFunction() {
  if (document.body.scrollTop = 0  || document.documentElement.scrollTop > 0) {
    document.querySelector("nav").classList.add("nav-fixed");
    document.querySelector("nav").classList.remove("nav-narrow");
   
   
  } else {
    document.querySelector("nav").classList.remove("nav-fixed");
    document.querySelector("nav").classList.add("nav-narrow");
    
  
    
  }
}