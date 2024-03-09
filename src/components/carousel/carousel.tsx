import React, { useEffect, useState } from 'react';
import "./carousel.scss";
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import C4 from '../../Images/c4.jpg';
import C2 from '../../Images/c2.jpg';
import C3 from '../../Images/c3.jpg';

const Carousel = () => {
    const [active, setActive] = useState(0);
    const images  = [
        C4,
        C2,
        C3,

    ];
    useEffect(() => {
        let timer: any;
        timer = setInterval(() => {
            onRightArrowClick();
        }, 5000)
        return () => {
            clearInterval(timer);
        }
    }, [active])
    const onleftArrowClick = () => {
        let current = active;
        current = current - 1;
        if(current < 0){
            current = images.length - 1;
        }
        setActive(current);
    }
    const onRightArrowClick = () => {
        let current = active;
        current = current + 1;
        if(current > images.length - 1){
            current = 0;
        }
        setActive(current);
    }
    const onCircleCarousel = (index: any) => {
        let current = index;
        // current = current + 1;
        // if(current > images.length - 1){
        //     current = 0;
        // }
        setActive(current);
    }
    return (
        <section className='carousel-container container'>
            {images.map((img,index) => (
                <div key={index} className={`carousel-inner ${active === index ? 'active': 'not-active'}`}>
                    <div className="left-icon" onClick={onleftArrowClick}><SlArrowLeft /></div>
                    <div className='img-container'><img src={img} alt="carousel-image" /></div>
                    <div className="right-icon" onClick={onRightArrowClick}><SlArrowRight /></div>
                    
                </div>
            ))}
            <div className='tesstts'>
            {images.map((_,index) => (
                <div onClick={() => onCircleCarousel(index)}  className={`carousel-circles ${active === index ? `c-active`: `c-not-active`}`}></div>
            ))}
            </div>
        </section>
    )
}

export default Carousel;