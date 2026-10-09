import React from 'react';
import { Link} from 'react-router-dom';
import { useState, useContext } from 'react';
import Carticon from '../assets/shoppingCart.png';
import xicon from '../assets/x-icon.png';
import Hamburger from './Hamburger';
import CartContext from '../Features/CartContext';
// import logo from '../assets/logoFull.png';

const Navbar=()=>{
    const [ hamburgerOpen, setHamburgerOpen ] = useState(false);
    const { cart } = useContext(CartContext);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }
    return(
               <div className='navbar bg-sage relative w-screen pt-1 flex pb-[10px] md:pb-0 md:h-[15vh] md:flex md:items-center lg:h-[20vh] lg:w-screen'>
            <div className='hamburger md:hidden lg:hidden mt-4 ml-4 ' onClick={toggleHamburger} >
            <Hamburger />
            </div> 
            <div className='navbarLinks w-[75vw] md:flex flex-row md:ml-[5vw] md:justify-evenly'>
            <Link to='/'>
            <div className="font-char text-2xl text-center mt-4">Remember<span className='text-2xl'> 4 </span>Always</div>
            </Link>
            <nav className='navbarLinksList md:flex flex-row-reverse md:justify-evenly'>
            <div className='divLinks flex flex-col bg-olive absolute left-0 top-0 p-5 w-[50vw] h-screen md:bg-transparent md:static md:p-0 md:mt-4 md:w-[45vw] md:h-[8vh]'>
            <div className='flex flex-col justify-around h-[30vh] md:flex-row md:justify-evenly md:h-[8vh]'>
            <button onClick={toggleHamburger} className='md:hidden'>
                <img className='w-[4vw] h-auto'src={xicon}></img>
                </button>
            <Link to='/' className='navLink text-4xl font-raleway md:text-2xl lg:text-lg' onClick={toggleHamburger}>Home</Link>
            <Link className='text-4xl font-raleway md:text-2xl lg:text-lg' to='/products' onClick={toggleHamburger}>Products</Link>
            {/* <Link to='/ourBrides' className='navLink' onClick={toggleHamburger}>Our Brides</Link>
        
            <Link to='/schedule' className='navLink' onClick={toggleHamburger}>Schedule a Consultation</Link> */}
            </div>
            </div>
            
    </nav>

    </div>
         <Link to='/cart'>
    <img className='w-[7vw] h-auto mt-4 md:mt-auto lg:w-[4vw]' src={Carticon} alt='Cart icon'></img>
    {cart.length}
    </Link> 
            <style jsx>{`
            @media only screen and (max-width: 768px) {
            .navbarLinksList{
                display: ${hamburgerOpen ? 'inline' : 'none'};
            }
            }
            `}</style> 

    </div>
    )
}

export default Navbar;