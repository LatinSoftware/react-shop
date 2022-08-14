import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import icon from '@icons/flechita.svg'
import AppContext from '@context/AppContext';
const MyOrder = ({toggleHandler}) => {
	const { state } = useContext(AppContext);
	var total = state.cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
	const handleHide = () => {
		// var order = document.getElementsByClassName("MyOrder")[0];
		// order.classList.toggle("hide");
		toggleHandler(false);
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={icon} alt="arrow" onClick={handleHide} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{ state.cart.map( product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				)) }
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${total}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
