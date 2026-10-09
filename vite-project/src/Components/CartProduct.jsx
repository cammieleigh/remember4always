import React, { useContext } from 'react';
import CartContext from '../Features/CartContext';

const CartProduct = ({props}) => {
    const {cart, dispatch} = useContext(CartContext);
    const increase = (id) => {
        const index = cart.findIndex( p => p.id === id)
        if (cart[index].quantity < 10){
            dispatch({type: "increase", id})
        }
    }

    const decrease = (id) => {
                const index = cart.findIndex( p => p.id === id)
        if (cart[index].quantity > 1){
            dispatch({type: "decrease", id})
        }
    }
    return(
        <div>
        <img className='w-[90vw]' src={`/images/${props.imgpath}`} alt={props.description}></img>
        <div>
            <button onClick={() => decrease(props.id)}>-</button>
            <button>{props.quantity}</button>
            <button onClick={() => increase(props.id)}>+</button>
        </div>
        <button>Delete</button>
        </div>
    )
}

export default CartProduct;