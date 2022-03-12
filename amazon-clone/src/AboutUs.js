import React, {useState, useEffect} from 'react';
import './AboutUs.css';

import img1 from './images/asha.jpg';
import img2 from './images/pavi.jpg';
import img3 from './images/aminata.jpg';


function AboutUs() {


    useEffect(()=>{
        setVisible(true);
    })

    const [visible,setVisible] = useState(false);

  return (
      <div className='initial'> 


        <div id="pageTitle" >
                <p>OUR TEAM</p>
        </div>


        <div className="columns" className={visible?'fadeIn':'fadeOut'}>
            <div id="team">
                <div>
                    <p id="teamTitle">Asha Islam</p>
                    <p id="teamPos">U2 Computer Engineering</p>
                </div>

                <img src={img1} alt="CEO" />
            </div>

            <div id="team">
                <div>
                    <p id="teamTitle">Pavithra Sivagnanasuntharam</p>
                    <p id="teamPos">U2 Computer Engineering</p>
                </div>

                <img src={img2} alt="CTO" />
            </div>

            <div id="team">
                <div>
                    <p id="teamTitle">Aminata Lo</p>
                    <p id="teamPos">U2 Computer Engineering</p>
                </div>

                <img src={img3} alt="CFO" />
            </div>

        </div>


        <div className="columns" id="middleColumn" className={visible?'fadeIn':'fadeOut'}>
            <div id="pageTitle1">
                <p>OUR TEAM</p>
            </div>

            <div id="pageData">
                <p>Let us present ourselves! Our names are Asha, Aminata and Pavithra. We are three friends who happen to have a common passion: web development!  </p>
                <p>Asha is a second year Computer Engineering student at Concordia University. Her passions include: biotechnology, web development and project management to name a few. In her free time, she likes to spend hours on Youtube, finish series in one night on Netflix, as well as evacuating her surplus of energy at the gym. </p>
                <p>Pavithra is also a second year Computer Engineering student at Concordia University. Her passions include: biotechnology, web development and mobile application development. For fun, she likes listening to music and browsing on TikTok for hours.</p>
                <p>Aminata completes the trio by also being a second year Computer Engineering student at Concordia University. Her interests are the following: aeronautics/aerospace, hardware development and hardware testing.</p>
            </div>

        </div>

        {/* <div className="columns" id="rightColumn" className={visible?'fadeIn':'fadeOut'}>
            <div id="team">
                <img id="imgRight" src={img1} alt="CEO" />
                
                <div>
                    <p id="teamTitle">CLIAR BROWN</p>
                    <p id="teamPos">CEO</p>
                </div>

            </div>

            <div id="team">
                <img id="imgRight" src={img2} alt="CTO" />

                <div>
                    <p id="teamTitle">ADMA FINCH</p>
                    <p id="teamPos">CTO</p>
                </div>

            </div>

            <div id="team" >
                <img id="imgRight" src={img3} alt="CFO" />
                <div>
                    <p id="teamTitle">JHON REYSE</p>
                    <p id="teamPos">CFO</p>
                </div>

            </div>

        </div> */}

      </div>

  );
}

export default AboutUs;
