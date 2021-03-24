import React, {useContext} from 'react'
import {CartContext} from './CartContext'
import './Tshirt.css'

function Tshirt(props) {
    const [cart, setCart]= useContext(CartContext)
    const addToCart = () => {
        const tshirt = {name: props.name, price: props.price, image: props.image}
        setCart(curr =>[...curr, tshirt]);
    }
    const removeFromCart = (item) => {
        setCart((currentCart) => {
          const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);
    
          if (indexOfItemToRemove === -1) {
            return currentCart;
          }
    
          return [
            ...currentCart.slice(0, indexOfItemToRemove),
            ...currentCart.slice(indexOfItemToRemove + 1),
          ];
        });
      };
      const amountOfItems = (id) => cart.filter((item) => item.id === id).length;
      
    return (
        <div className="shopy__cart">
            <h1>{props.name}</h1>
          
            <h1>{props.price}</h1>
<div className="shop__image">
<img src={props.image} alt="" />
</div>
          
           
            <button onClick={addToCart}>Add cart</button>
            <button onClick={removeFromCart}>-</button>
            <hr/>
        </div>
    )
}

export default Tshirt
