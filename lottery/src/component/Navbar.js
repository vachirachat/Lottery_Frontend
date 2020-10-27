import React, { useState, useEffect } from 'react';

const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#B22335'}}>
                <a class="navbar-brand" style={{color:'#FFFFFF'}}>LOTTERY</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/signin" style={{color:'#FFFFFF'}}>Sign in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/lottery" style={{color:'#FFFFFF'}}>LOTTERY</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/ticket" style={{color:'#FFFFFF'}}>TICKET</a>
      </li>
    </ul>
  </div>
</nav>

        </div>
    );
}

export default Navbar;