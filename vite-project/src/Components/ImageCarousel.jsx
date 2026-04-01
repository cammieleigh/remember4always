import React, { useState } from 'react';
import leftArrow from '../assets/leftarrow.png';
import rightArrow from "../assets/rightarrow.png";
import familyChain from "../assets/familyChain.png";
import memories from "../assets/memories.png";
import neverbeapart from "../assets/neverBeApart.png";
const images = [
    {id:1, src:familyChain, desc: 'Family Chain'},
    {id:2, src:memories, desc:"Memories"},
    {id:3, src:neverbeapart, desc:"Never be Apart"},
]

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const  selectNextImg = () => {
        setCurrentImageIndex(
            (currentImageIndex + 1) % images.length
        )
    }

    const selectPrevImg = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        )
    }

    return(
        <div className='imageCarousel flex m-auto'>
        <button className='carouselButton' onClick={selectPrevImg}><img className='w-[5vw] h-auto' src={leftArrow}></img></button>
        {images.map((image, index) => (
            <card className={ currentImageIndex === index ? 'block' : 'hidden'}>
            <img src = {image.src}
            className={ currentImageIndex === index ? 'block' : 'hidden'}></img>
            <h3 className={ currentImageIndex === index ? 'block' : 'hidden'}>{image.desc}</h3>
            <button className={ currentImageIndex === index ? 'block' : 'hidden'}>View Here</button>
            </card>
        ))}
        <button className='carouselButton' onClick={selectNextImg}><img className='w-[5vw] h-auto' src={rightArrow}></img></button>
        </div>
    )
}

export default ImageCarousel;
