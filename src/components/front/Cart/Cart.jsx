import React from 'react';
import './Cart.css';

const Cart = ({ cItems }) => {
  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Shopping Cart Items</div>

      {cItems.length === 0 && (
        <div className='cart-items-empty'>No items in cart.</div>
      )}

      <div className='cart-items-container'>
        {cItems.map((item) => (
          <div className="cart-items-list" key={item.id}>
            <img
              className='cart-item-image'
              src={item.image} 
              alt={item.name}
            />
            <div className='cart-item-name'>
              <p>{item.name}</p>
            </div>
            <div className='cart-item-price'>
              <p>${item.price}</p>
            </div>
            <div className='cart-item-quantity'>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;