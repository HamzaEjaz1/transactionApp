import React from 'react'
import './Hero.css'
const Hero = (props) => {
  return (
  <>
 <div className='hero' style={{backgroundColor:props.heroBg}}>
 <div className='container' style={{backgroundColor:props.bg,display:props.flex,flexDirection:props.dir}}>
<div className='left'>
    <h6 style={{color:props.h6Color}}>
        {props.h6}
    </h6>
    <h1 style={{color:props.h1Color}}> 
        {props.h1}
    </h1>
    <p style={{color:props.descColor}}>
        {props.desc}
    </p>
    <button className='btn'  >{props.text}</button>
</div>
<div className='right'>
    <img src={props.src} alt="" style={{width:'90%'}} />
</div>

  </div>
 </div>
  </>
  )
}

export default Hero