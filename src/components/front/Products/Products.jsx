import React from 'react';
import './Products.css';

const Products = ({ pItems, handleAdd }) => {
  return (
    <div className='products'>

      <div className='products-container'>
        {pItems.map((productItem) => (
          <div className='card' key={productItem.id}>
            <div>
              <img className="product-img" src={productItem.image} alt={productItem.name} />
            </div>
            <div>
              <h3 className='product-name'>{productItem.name}</h3>
            </div>
            <div>
              <h6 className='product-price'>${productItem.price}</h6>
            </div>
            <div>
              <button className='product-add' onClick={() => handleAdd(productItem)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Products;