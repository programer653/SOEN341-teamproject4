// need to create pages called 
// about-us.js
// team.js
// contact-us.js


import React from 'react';
import './Footer.css';

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
                    <a href = '/About-us'>About Us </a>
                </section>
            </section>

            <section className='footer-middle'>
                <section>
                    <a href = '/Team-Members'>Team Members </a>
                </section>
            </section>

            <section className='footer-right'>
                <section>
                    <a href = '/Contact'>Contact Us! </a>
                </section>
                <br />

            </section>



        </section>
        <hr className='footer-separator' />
    </section>

  )
}

export default Footer;