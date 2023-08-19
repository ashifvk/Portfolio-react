import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
    <div className='main'>
      {/* <!-- section contact --> */}

<section class="contact" id="contact">
  <h2 class="heading text-white text-center ">Contact <span>Me!</span></h2>
  <div class="container">
  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="First Name"></input>
      <input type="text" placeholder="Last Name"></input>
    </div>
    <div class="input-box">
      <input type="email" placeholder="Email"></input>
      <input type="number" placeholder="Phone Number"></input>
      <textarea placeholder="Your Message" cols="30" rows="8" className='msg'></textarea>
      <input type="submit" value="Send" class="btn"></input>
    </div>
    </form>
</div>
</section>
    </div>
    </>
  )
}
