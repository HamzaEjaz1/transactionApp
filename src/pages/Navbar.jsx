import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div className='navbar-container container'>
                    <Link to="/" className='navbar-logo' >
                        <FaFingerprint className='navbar-icon' /> LAVISH
                    </Link>


                    <div className='menu-links'>
                        <NavLink style={{margin:'0px 20px', color:"white"}}>Home</NavLink>
                        <NavLink style={{margin:'0px 20px', color:"white"}}>Services</NavLink>
                        <NavLink style={{margin:'0px 20px', color:"white"}}>Contact Us</NavLink>
                        <NavLink style={{margin:'0px 20px', color:"white",border:'1px solid white',padding:'3px 15px',borderRadius:'5px'}}>Login</NavLink>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar