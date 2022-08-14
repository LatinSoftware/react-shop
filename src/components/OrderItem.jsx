import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import icon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
const OrderItem = ({product}) => {
	const { title, price, images } = product;
	const { removeToCart } = useContext(AppContext);
	const deleteProduct = (e) => {
		const element = e.target.parentElement;
		element.addEventListener("animationend", () => {
			removeToCart(product);
		})
		element.classList.add("OrderItem--hide");
	}
	return (
		<div className="OrderItem" >
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={icon} alt="close"  onClick={deleteProduct} />
		</div>
	);
}

export default OrderItem;
