import React, { useContext } from 'react';
import CartContext from '../Features/CartContext';
import CartProduct from './CartProduct';


const Cart=() => {
    const { cart } = useContext(CartContext);
    
    return(
        <div className='Cart'>
            <div>
                {cart.map(p => (
                     <CartProduct props={p}/>

                ))}
                
            </div>
            <div>
                <h5>Total Items:</h5>
                <h5>Total Price:</h5>
            </div>
        </div>
    );
}

export default Cart;