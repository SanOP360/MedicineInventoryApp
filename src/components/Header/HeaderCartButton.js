import React from 'react'

import classes from './HeaderCartButton.module.css';

const HeaderCartButton=(props)=>{
    return(
        <button onClick={props.onClick}>
            <span>Your Cart</span>
            <span>0</span>

        </button>
    )
}
export default HeaderCartButton