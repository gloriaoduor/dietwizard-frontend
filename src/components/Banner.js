// HeroBanner.js
import React from 'react';
import logo from '../assets/logo.PNG';
import sparkles from '../assets/sparkles.png';

const HeroBanner = () => {
  return (
    <div >
     <nav class="navbar navbar-expand-lg navbar-dark text-white" style={{backgroundColor:'#121f57'}}>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center " id="navbarText">
    {/* <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Pricing</a>
      </li>
    </ul> */}
    <span class="navbar-text text-white">
     Diet Wizard  
     <img src={sparkles} className="img-fluid" style={{width:"30px", height:"20px"}}  />
    </span>
  </div>
</nav>
    </div>
  );
};

export default HeroBanner;
