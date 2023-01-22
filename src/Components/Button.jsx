import React from 'react'

const Button = (props) => {
  return (
    <>
    <button style={{backgroundColor:props.cl}} className={props.class}>{props.text}</button>
    </>
  )
}

export default Button