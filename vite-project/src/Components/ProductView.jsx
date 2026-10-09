import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../Features/CartContext';

const ProductView = (props) => {
  const { dispatch } = useContext(CartContext);
    return(
        <div className='flex w-screen mt-7.5 mb-7.5'>
         <div className="flex flex-col text-center w-screen justify-around items-center gap-y-3.75">
            <img className='w-[90vw]' src={`/images/${props.imgpath}`} alt={props.description}></img>
            <div className='flex flex-col justify-around gap-y-3.75'>
          <h1 className='' >{props.description} </h1>
          <p >{props.price}</p>
          <button id={props.id} className='border rounded p-1.5 md:w-[20vw]' onClick={() => dispatch({type: "Add", props: props})}>Add to Cart</button>
          </div>
        </div>
        </div>
    )

}

export default ProductView;