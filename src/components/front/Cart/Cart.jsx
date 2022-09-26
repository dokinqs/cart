import React from 'react';
import './Cart.css';

const Cart = ({ cItems, handleAdd, handleRemove }) => {
  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Shopping Cart Items</div>

      <div id='removed-alert'></div>

      {cItems.length === 0 && (
        <div className='cart-items-empty'>No items in cart.</div>
      )}

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
                onClick={() => handleRemove(item)}
              >-</button>
            </div>
          </div>
        ))}

        {/* <div className='total'>Total: </div> */}
      </div>
      
      <div className='checkout'>
        <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;