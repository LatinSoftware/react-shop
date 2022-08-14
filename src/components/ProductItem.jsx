import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext'
import '@styles/ProductItem.scss';
import icon from '@icons/bt_add_to_cart.svg';
const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);
	const handleClick = (item) => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className='product-info__button-efect' onClick={() => handleClick(product)} >
					<img src={icon} alt="add to cart icon" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
