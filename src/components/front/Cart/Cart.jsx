import React from 'react';
import './Cart.css';

const Cart = ({ cItems, handleAdd, handleSubtract, handleDelete }) => {
  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Shopping Cart Items</div>

      <div id='removed-alert'></div>

      {cItems.length === 0 && (
        <div className='cart-items-empty'>
          <b>Your shopping cart is empty</b>
          <br />
          <a href="/">Shop Now</a>
          <br />
          <a href="login">
            <button className='login'>
              Log In
            </button>
          </a>
        </div>
      )}

      <div className='checkout'>
        <span className='sc-items'>Total (X Items): </span>
        <span className='sc-total'><b>$XX.XX</b></span>
        <br />
        <button className='checkout-btn'>Checkout</button>
      </div>

      <div className='cart-items-container'>

        {cItems.map((item) => (
          <div className="cart-item-list" key={item.id}>
            <img
              className='cart-item-image'
              src={item.image} 
              alt={item.name}
            />
            <div className='cart-item-name'>
              <p>{item.name}</p>
            </div>
            <div className='cart-item-price'>
              <p><b>${item.price}</b></p>
            </div>
            <div className='cart-item-quantity'>
              <p>Qty: {item.quantity}</p>
            </div>
            <div className='cart-item-function'>
              <button 
                className='cart-item-add' 
                onClick={() => handleAdd(item)}
              >+</button>
              <button 
                className='cart-item-remove' 
                onClick={() => handleSubtract(item)}
              >-</button>
              <button 
                className='cart-item-delete' 
                onClick={() => handleDelete(item)}
              >Delete</button>
            </div>
          </div>
        ))}

        <div className='total'>
          <span className='sc-items'>Total (X Items): </span>
          <span className='sc-total'><b>$XX.XX</b></span>
        </div>
      </div>
      
    </div>
  )
}

export default Cart;