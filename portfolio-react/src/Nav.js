import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className='main'>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg">
    <a class="navbar-brand text-white" >ASH<span>IF</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/aboutme">About Me</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="/project">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/cont">Contact</a>
        </li>
      </ul>
      {/* <!-- <form class="form-inline my-2 my-lg-0">
        <a class="link " href="#contact">CONTACT</a>
      </form> --> */}
    </div>
  </nav>
    </div>
  )
}
