// need to create pages called 
// about-us.js
// team.js
// contact-us.js


import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <section className='footer'>
        <br />
        <hr className='footer-separator' />
        <br />
        <br />
        
        {/* this is the top portion of the footer */}
        {/* <section className='footer-up'>
           
            <a href ="/" target="_blank" rel = "noopener noreferrer">GitHub Link</a>
        
        </section> */}

        {/* this is the bottom portion of the footer */}
        <section className='footer-bottom'>

            <section className='footer-left'>
                <section>
                    <Link to = "/about-us">
                        <a href = '/about-us'>About Us </a>
                    </Link>
                
                </section>
            </section>

            <section className='footer-middle'>
                <Link to = "/Team-Members">
                            <a href = '/Team-Members'> Team Members </a>
                </Link>
            </section>

            <section className='footer-right'>
                <Link to = "/ContactUs">
                            <a href = '/ContactUs'>Contact Us </a>
                </Link>
                <br />
            </section>



        </section>
        <hr className='footer-separator' />
    </section>

  )
}

export default Footer;