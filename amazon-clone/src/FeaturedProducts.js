import React ,{useState} from 'react';
import './FeaturedProducts.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider'


function FeaturedProducts() {

const [slideIndex, setSlideIndex] = useState(1)

const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === dataSlider.length){
        setSlideIndex(1)
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(dataSlider.length)
    }
}

const moveDot = index => {
    setSlideIndex(index)
}
  

  return (
      
    <div className="container-slider">
        <h1>FEATURED PRODUCTS</h1>
        {dataSlider.map((obj, index) => {
        return (
                <div
                key={obj.id}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                    <img 
                    src={`/Imgs/${index + 1}.jpg`} 
                    />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 5}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>

</div>  
)
}

export default FeaturedProducts;