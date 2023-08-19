import React, { useState } from 'react'
import './Cont.css'

export default function Cont() {

  const [input,setInput] = useState({
name:'',
contact:'',
email:'',
message:''
  })
const inputChange = (event)=>{
const {name,value}=event.target
setInput({...input,[name]:value})
}
const submit = ()=>{
  console.log(input);
}


  return (
    <div className='mai'>
        <div className='bor'>
        <h2 class="heading text-white text-center me">Contact <span>Me!</span></h2>
      <div className='dis'>
        <label className='text-white'>YOUR NAME</label>
        <input type='text' name='name' onChange={inputChange}></input>
        <label className='text-white'>CONTACT</label>
        <input type='tel' name='contact' onChange={inputChange}></input>
        <label className='text-white'>EMAIL</label>
        <input type='text' name='email' onChange={inputChange}></input>
        <label className='text-white'>MESSAGE</label>
        <textarea className='ar'  rows="8" name='message' onChange={inputChange}></textarea>
        <button className='bv' onClick={submit}>SEND</button>
      </div>
      </div>
    </div>
  )
}
