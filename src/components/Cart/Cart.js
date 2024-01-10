import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/modal'
const Cart=(props)=>{
    return (
      <Modal onClose={props.onClose}>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>Rs 100</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button-alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.orderBtn}>Order</button>
        </div>
      </Modal>
    );

}
export default Cart