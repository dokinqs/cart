import React from 'react';
import './Products.css';

const Products = ({ productItems }) => {
  return (
    <div className='products'>

      {productItems.map((productItem) => (
        <div className='card' key={productItem.id}>
          <div>
            <img className="product-img" src={productItem.image} alt={productItem.name} />
          </div>
          <div>
            <h3 className='product-name'>{productItem.name}</h3>
          </div>
          <div>
            <h4 className='product-price'>${productItem.price}</h4>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Products;