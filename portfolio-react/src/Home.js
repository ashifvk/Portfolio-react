import React from 'react'
import './Home.css'
import asi from './asi.png'
import Tech from './Tech'
import Nav from './Nav'

import Footer from './Footer'
import Cont from './Cont'

export default function Home() {
  return (
    <div className='main'>
<Nav/>
<section class="home" id="home">
<div class="container">
  <div class="row">
    <div class="col-lg-7">
      <div class="box1">
        <h1 class="text-dark t">Hi,I'm</h1>
        <h1><span> ASHIF VK</span> </h1>
        <h5 class="text-dark ">Full Stack Developer</h5><br></br>
        <a class="link" href="#contact">Message</a>
        <div class="social-media">
          <a href="https://www.instagram.com/az1ff/?igshid=NjIwNzIyMDk2Mg%3D%3D"><i class="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/ashif.vk.75"><i class="bi bi-facebook"></i></a>
          <a href="https://www.linkedin.com/in/ashif-vk-921260177/"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/ashifvk"><i class="bi bi-github"></i></a>
        </div>
      </div>

    </div>
    <div class="col-lg-5">
<div class="box2">
  <img src={asi} class="img-fluid"></img>
</div>
    </div>
  </div>
</div>
</section>
<Tech/>
<Cont/>
      
<Footer/>




    </div>
  )
}
