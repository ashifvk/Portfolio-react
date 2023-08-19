import React from 'react'
import './Project.css'
import hotel from './hotel.png'
import portfolio from './portfolio.png'
import school from './school.png'
import wildlife from './wildlife.png'
import Nav from './Nav'
import Footer from './Footer'

export default function Project() {
  return (
    <div className='main'>
<Nav/>
       <section id="project">
          <h1 class="text-white text-center mt-5 ">My <span>Projects</span></h1>
          <div class="container text-white">
            <div class="row mt-4">
            
            <div class="work-list">
              <div class="work">
                <img src={portfolio} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                  <h3>Portfolio Website</h3>
                  <p>This project is my portfolio, it provide my information like education, experince, skill and contact details.</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
              <div class="work">
                <img src={hotel} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                <h3>Hotel Room Booking Website</h3>
                  <p>This website gives the availability of rooms and details of room and hotel. </p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="work-list">
              <div class="work">
                <img src={wildlife} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                  <h3>wildlife Website</h3>
                  <p>The Website provide the details about the wildlife and gives the information about the animal.</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
              <div class="work">
                <img src={school} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                <h3>School Website</h3>
                  <p>The website which gives the courses details of the school and also provide collection of books. </p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </section>
        <Footer/>
 
    </div>
  )
}
