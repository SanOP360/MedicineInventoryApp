import React,{useState} from 'react'
import CartContext from './CartContext';
const CartProvider=(props)=>{
    const [items,updateItems]=useState([]);

    const addItemHandler=(item)=>{

    }

    const removeItemHandler=(item)=>{

    }

    const cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler

    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider