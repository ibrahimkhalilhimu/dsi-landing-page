import React from 'react';
import { AiOutlineHome,AiOutlineMail } from "react-icons/ai";
import { FiShuffle } from "react-icons/fi";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light " id="custom-nav">
            <div className="container">
  
<div className="d-flex">
<h4><span style={{color:"#85171A"}}>D</span><span style={{color:"#EC323B"}}>S</span><span style={{color:"#FFBC25"}}>I</span></h4>
<div className="headerText">
  <p style={{marginTop:"10px"}}>DWIDASA</p>
  <p style={{marginTop:"-17px"}}>SAMSARA</p>
  <p style={{marginTop:"-17px"}}>INDONESIA</p>
</div>
</div>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item ">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Technology</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Client
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Partner</a>
      </li>
    </ul>
  <div className="icon">
  <AiOutlineHome/>
  <AiOutlineMail className="ml-4"/>
  <FiShuffle className="ml-4"/>
 
  </div>
  </div>
  </div>
</nav>
          
        </div>
    );
};

export default Header;