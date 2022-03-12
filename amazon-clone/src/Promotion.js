import React, {useState, useEffect} from 'react';
import "./Promotion.css";


// could add the filtering option in this page

function Promotion() {

    useEffect(()=>{
        setVisible(true);
    })

    const [visible,setVisible] = useState(false);


  return (
    <div className = "promotion">

        <div id="pageTitle" >
            <p>Deals of the Day</p>
        </div>



        <br />
        <br />
        <br />

    </div>
  )
}

export default Promotion; 
