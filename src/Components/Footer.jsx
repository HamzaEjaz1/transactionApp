import React from 'react'
import {  FaFacebookSquare, FaFingerprint, FaInstagramSquare, FaLinkedin, FaTwitterSquare,  FaYoutubeSquare } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className="container">
            <h1 style={{textAlign:'center',color:'white',fontSize:'19px'}}>Jion Our Exculsive Membership to receive the latest news and trends</h1>
            <h1 style={{textAlign:'center',color:'white',fontSize:'19px'}}>You Can unsubscribe any time</h1>
        
<div className="cdf">
<input type="email" name="email" id="" placeholder='hejaz342@gmail.com' />
            <button className='btn'>Subscribe</button>
</div>

<div className='footer-links'>
    <div className="Aboutus">
        <h3>Aboutus</h3>
        <ul>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
        </ul>
    </div>
    <div className="Videos">
    <h3>Videos</h3>
        <ul>
            <li>Submit Video</li>
            <li>Agency</li>
            <li>Ambasdors</li>
            <li>Influencer</li>
        </ul>
    </div>
    <div className="Contactus">
    <h3>Contact us</h3>
        <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Destinations</li>
            <li>Soponsorships</li>
        </ul>
    </div>
    <div className="Socialmedia">
    <h3>Social media</h3>
        <ul>
            <li><FaLinkedin/> Linkdin</li>
            <li><FaFacebookSquare/> Facebook</li>
            <li><FaInstagramSquare/>Instagram</li>
            <li><FaTwitterSquare/>Twitter</li>
        </ul>
    </div>

</div>

<div className="copyright">
    <div><FaFingerprint/>LAVISH</div>
    <div>LAVISH 2022 - 2023</div>
    <div><FaLinkedin/><FaFacebookSquare/> <FaYoutubeSquare/> </div>
</div>
        </div>
    </footer>
    </>
  )
}

export default Footer