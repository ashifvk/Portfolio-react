import React from 'react'
import './Project.css'
import player from './images/player_auction.png'
import portfolio from './images/portfolio.png'
import wildlife from './images/wildlife.png'
import hotel from './images/hotel_booking.png'
import roombooking from './images/hotel.png'
import school from './images/school.png'
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
                  <p>This project is my portfolio developed with html,css,bootstrap,react.js. it provide my information like education, experince, skill and contact details.</p>
                  <a href="https://github.com/ashifvk/Portfolio-react"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
              <div class="work">
                <img src={hotel} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                <h3>Hotel Website</h3>
                  <p>This website desighned as hotel food booking website which adding food details.it was developed with html,css,boostrap as frontend and backend as python django. </p>
                  <a href="https://github.com/ashifvk/hotel_booking"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="work-list">
              <div class="work">
                <img src={player} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                  <h3>player_auction Website</h3>
                  <p>The Website provide the details about the player for the auction and it providing adding the details of player avd viewing it.it developed with python django, html and css.</p>
                  <a href="https://github.com/ashifvk/player_auction"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
              <div class="work">
                <img src={roombooking} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                <h3>Hotel booking website</h3>
                  <p>The website which show the booking of room model ,it developed with html,css ,bootstrap. </p>
                  <a href="https://github.com/ashifvk/html_css_projects/tree/main/html%2Ccss%20projects/hotelroombooking"><i class='bx bx-link-external'></i></a>
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
                  <p>The Website show the model for details about the wildlife and gives the information about the animal.</p>
                  <a href="https://github.com/ashifvk/html_css_projects/tree/main/html%2Ccss%20projects/wild%20life"><i class='bx bx-link-external'></i></a>
                </div>
              </div>
              <div class="work">
                <img src={school} alt="" class="img-fluid" width="400px" height="200px"></img>
                <div class="layer">
                <h3>School Website</h3>
                  <p>The website which show the model for the courses details of the school and also provide collection of books. </p>
                  <a href="https://github.com/ashifvk/html_css_projects/tree/main/html%2Ccss%20projects/school%20website"><i class='bx bx-link-external'></i></a>
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
