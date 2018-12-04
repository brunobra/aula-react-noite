import React from 'react';

import './Product.css';
import './ProductName.css';
import './ProductPrice.css';
import './ProductDelete.css';

const Product = ({name, price}) => (
	<div className="Product">
		<span className="ProductName">{name}</span>
		<span className="ProductPrice">{price}</span>
		<button className="ProductDelete">X</button>
	</div>
)

export default Product;
