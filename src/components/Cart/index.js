import React from 'react';

import CartHeader from '../CartHeader';
import Product from '../Product';

const Cart = () => (
	<div>
		<p>Carrinho</p>
		<CartHeader />
		<Product />
		<Product />
		<Product />
	</div>
)

export default Cart;
