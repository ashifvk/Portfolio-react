import React from 'react'
import './Aboutme.css'
import Nav from './Nav'
import Footer from './Footer'
import asi3 from './asi3.JPG'

export default function Aboutme() {
    return (
        <div className='main'>
            <Nav />
            <section id="about">
                <div class="container one">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="boxx">
                                <img src={asi3} class="img-fluid"></img>
                            </div>
                        </div>
                        <div class="col-lg-6 ml-5 top">
                            <h1 class="text-white">About <span>Me!</span></h1>
                            <p class="text-white"> I have good knowledge of programming languages like  Python,C and HTML and .And also I am willing to work on latest technologies, new ideas and methodologies in software development field. To enhance my current technical skills and achieve new height of professional success by making a valuable contribution towards growth and development of the company</p>
                            {/* <!-- <a class="link" href="#contact">DOWNLOAD CV</a> --> */}
                            <div class="tab-titles text-white">
                                <p class="tab-links active-link" onClick={(event) => opentab('skills', event)}>Skills</p>
                                <p class="tab-links" onClick={(event) => opentab('experience', event)}>Experience</p>
                                <p class="tab-links" onClick={(event) => opentab('education', event)}>Education</p>

                            </div>
                            <div class="tab-contents text-white active-tab" id="skills">
                                <ul>
                                    <li><span>Python & Django</span><br></br>Web Application developer using python</li>
                                    <li><span>HTML,CSS,Bootstrap&React</span><br></br>Front End developer ,Designing the webpages</li>
                                </ul>
                            </div>
                            <div class="tab-contents text-white" id="experience">
                                <ul>
                                    <li><span>Experience</span><br></br>Fresher</li>
                                </ul>
                            </div>
                            <div class="tab-contents text-white" id="education">
                                <ul>
                                    <li><span>Internship</span><br></br>Internship in Python full stack at Maitexa Technologies,calicut</li>
                                    <li><span>BCA</span><br></br>Graduated in  Bachelor of Computer Application at calicut University</li>
                                    <li><span>Industrial Visit</span><br></br>CYBROSYS Technologies,calicut(jan 21,2023)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            
{/* <!-- section education --> */}

<div class="container">
    <h2 class="text-center text-white lj mt-5">Educat<span>ion</span> </h2>
    <div class="row  lj">
      <div class="col-lg-4"> 
  <div class="card text-center mt-5 pb-5"  style={{width: 18+"rem"}}>
    <div class="card-body">
        <i class='bx bxs-school'></i>
      <h5 class="card-title text-white">SSLC(2017-2018)</h5>
      <p class="card-text text-white"><b>NHSS Nanminda</b></p>
        <p class="card-text text-white">-High School Educaion</p>
        <p class="card-text text-white">Passed in 2018</p>

    </div>
  </div>
  </div>
  <div class="col-lg-4"> 
    <div class="card text-center mt-5 pb-4"  style={{width: 18+"rem"}}>
      <div class="card-body">
        <i class='bx bxs-school'></i>
        <h4 class="card-title text-white">Plus Two(2018-2020)</h4>
        <p class="card-text text-white"><b>NHSS Nanminda</b></p>
        <p class="card-text text-white">-Higher Secondry Educaion In Science</p>
        <p class="card-text text-white">Passed in 2020</p>
       
      </div>
    </div>
    </div>
    <div class="col-lg-4"> 
      <div class="card text-center mt-5" style={{width: 18+"rem"}}>
        <div class="card-body">
            <i class='bx bxs-school'></i>
          <h5 class="card-title text-white">Degree(2020-2023)</h5>
          <p class="card-text text-white"><b>College Of Applied Science,Thamarassery</b></p>
          <p class="card-text text-white">-Graduation In BCA at Calicut University</p>
          <p class="card-text text-white">Passed in 2023</p>
        </div>
      </div>
      </div>
  </div>
  </div>

<section class="education" id="edu">

<h2 class="heading text-white text-center p-5">My <span>Journey</span></h2>
<div class="container">
  <div class="col-lg-6 m-auto pad">
<div id="carouselExampleCaptions" class="carousel slide text-white" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container p-5">
        <h2 class="text-center">PYTHON FULL STACK DEVELOPER</h2>
        <div class="icon  ">
          <i class='bx bxl-python'></i>
          <i class='bx bxl-html5'></i>
          <i class='bx bxl-css3' ></i>
          <i class='bx bxl-bootstrap' ></i>
          <i class='bx bxl-react' ></i>
          <i class='bx bxl-javascript' ></i>
        </div><br></br>
        <p class="text-center">PYTHON,HTML,CSS,BOOTSTRAP,REACT</p>
        <p class="text-center">Pursuing internship in Python full stack at Maitexa Technology,Calicut</p>
        <h5 class="text-center">june 2023-present</h5>
      </div>

     
    </div>
   
    <div class="carousel-item">
      <div class="container p-5">
        <h2 class="text-center">CONTACT</h2>
      <p class="text-center"><i class="bi bi-geo-alt-fill"></i>   India,kerala,calicut</p>
      <p class="text-center"><i class="bi bi-calendar"></i>  22-07-2002</p>
        <p class="text-center"><i class="bi bi-envelope"></i>  ashifvk6511@gmail.com</p>
        <p class="text-center"><i class="bi bi-telephone-fill"></i>  9847896741</p>
        </div>
      
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
</div>
</div>

</section>





            <Footer />
        </div>
    )
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      
      for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
