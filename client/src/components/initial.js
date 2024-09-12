import React from 'react';
import '../assets/css/initial.css'
import smiley from '../assets/images/smiley2.jpg'
const initial =()=>{
    return(
        <div id='initial-main-div'>
            <h1 id='initial-h1'>Welcome To ChatApp</h1><br/>
            <img id='initial-img' src={smiley} alt='smiley' width={150} height={150}/>
            <span id='initial-span-1'>new to ChatApp ?</span>
            <br/>
           
            <button id='initial-signup'>signup</button><br/>
            <span id='initial-span-2'>_____________________________________________________________</span><br/>
            <span id='initial-span-3'>Already have an account </span> <button id='initial-login'>login</button>
        </div>
    )
}
export default initial;