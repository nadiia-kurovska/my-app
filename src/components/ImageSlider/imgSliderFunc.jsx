import React from "react";
import {useState} from "react";
import styles from './style.module.css';


function ImageSlider  ({slides})  {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slideStylesImage = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const sliderStyles = {
        height: "100%",
        position: "relative",
    }
    
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: 'translate(0, -50%)',
        left: '32px',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        color: "#fff",
        zIndex: "1",
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: 'translate(0, -50%)',
        right: '32px',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        color: "#fff",
        zIndex: "1", 
        cursor: "pointer",
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    }

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    }



    const goToPrevious = () => {
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex ===slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
    <div className="styles.sliderStyles">
        <button 
            className="styles.leftArrowStyles"
            onClick={goToPrevious}
            ></button>
        <button 
            className="styles.rightArrowStyles"
            onClick={goToNext}
            ></button>
        <div className="styles.slideStyles" style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        <div className="styles.dotsContainerStyles">
            {slides.map((slide, slideIndex) => (
                <div 
                    key={slideIndex} 
                    className="styles.dotStyles"
                    onClick={() => goToSlide(slideIndex)}
                    >*</div>
            ))}
        </div>
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>

    </div>
    )
}


export default ImageSlider;
