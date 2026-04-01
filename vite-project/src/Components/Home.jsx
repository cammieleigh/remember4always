import React from 'react';
import homeImg from '../assets/angelsFromAbove.png';
import { Link} from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import familyChain from '../assets/familyChain.png';
import memories from '../assets/memories.png';
import neverBeApart from '../assets/neverBeApart.png';

const Home=() => {
    return(
        <div className='home '>
            <div className='lg:flex lg:flex-row-reverse lg:items-center'>
            <img className='w-[75vw] h-auto block m-auto rounded-2xl mt-5 mb-7 lg:w-[35vw]' src={homeImg} alt='Plaque depicting an angel with the inscription "Angels from above watch over those we love"'></img>
            <div>
            <h1 className='font-ovo text-center text-5xl'>Resin Memorial Gifts</h1> 
            <h2 className='font-raleway text-center text-xl w-[50vw] m-auto'>Physical reminders of loved ones who have passed </h2>
            <button className='m-auto mt-7 border rounded-md p-3 block'>
                <Link to='/products'>View our Products</Link>
            </button>
            </div>
            </div>
            <div className='flex mt-10 mb-15'>
               <ImageCarousel />
            </div>
            <div className='hidden md:flex md:gap-y-3 md:justify-evenly md:m-auto max-w-screen'>
                <div className='flex flex-col align-center items-center gap-y-3'>
                    <img className='w-[25vw]'src={familyChain}></img>
                    <button className='border rounded-md p-3 w-[75%]'>View Product</button>
                </div>
                <div className='flex flex-col align-center items-center gap-y-3'>
                    <img className='w-[25vw]' src={memories}></img>
                    <button className='border rounded-md p-3 w-[75%]'>View Product</button>
                </div>
                <div className='flex flex-col align-center items-center gap-y-3'>
                    <img className='w-[25vw]' src={neverBeApart}></img>
                    <button className='border rounded-md p-3 w-[75%]'>View Product</button>
                </div>
            </div>
        </div>
    );
}

export default Home;