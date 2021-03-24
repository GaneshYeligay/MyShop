import React, {useContext}from 'react'
import {CartContext} from './CartContext'

function Cart() {
   const [cart, setCart]= useContext(CartContext);
   const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <div>
            <span> item in cart : {cart.length}</span>
            <br />
            <span> total price : {totalPrice} </span>
        </div>
    )
}

export default Cart
