import React, { useState } from 'react'
import styles from "./CarouselStyle.module.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const CarouselItem = ({children, width}) => {
  return (
    <div className={styles.carouselItem} style={{ width:width }}>
        { children}
    </div>
  )
}


const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = React.Children.count(children) - 1;
            
        } else if ( newIndex >= React.Children.count(children)) {
            newIndex = 0
        }

        setActiveIndex(newIndex)
    }

    return (
        <>
            <div className={styles.carousel}>
                <div 
                className={styles.inner} 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

                    {React.Children.map( children, (child,index) => {
                        return React.cloneElement(child, { width: "100%" })
                    })}

                </div>
            </div>
            <br/>
            <div className={styles.indicators}>
                <FaArrowLeft className={styles.arrow} 
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                >
                </FaArrowLeft>
                <FaArrowRight className={styles.arrow} 
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                >
                </FaArrowRight>
            </div>
        
        </>
    )
}


export default Carousel