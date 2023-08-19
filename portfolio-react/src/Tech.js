import React from 'react'
import './Tech.css'

export default function Tech() {
  return (
    <div>
      
{/* <!-- section tech knwldge --> */}
<div class="container">
  <h2 class="text-center text-white lj mt-5">Technical <span> Knowledge</span> </h2>
  <div class="row  lj">
    <div class="col-lg-4"> 
<div class="card text-center mt-5" style={{width: 18+"rem"}}>
  <div class="card-body">
    <i class='bx bxl-python'></i>
    <h5 class="card-title text-white">Python and Django</h5>
    <p class="card-text text-white">Creating web applications with python django as backend.</p>
  </div>
</div>
</div>
<div class="col-lg-4"> 
  <div class="card text-center mt-5" style={{width: 18+"rem"}}>
    <div class="card-body">
      <i class='bx bxl-bootstrap'></i>
      <h5 class="card-title text-white">HTML,CSS,Bootstrap</h5>
      <p class="card-text text-white">Creating websites with html and designing the it with css bootstrap.</p>
     
    </div>
  </div>
  </div>
  <div class="col-lg-4"> 
    <div class="card text-center mt-5" style={{width: 18+"rem"}}>
      <div class="card-body">
        <i class='bx bxl-react' ></i>
        <h5 class="card-title text-white">Javascript,React</h5>
        <p class="card-text text-white">Developing web application with javascript and react.js as frontend.</p>
     
      </div>
    </div>
    </div>
</div>
</div>

    </div>
  )
}
