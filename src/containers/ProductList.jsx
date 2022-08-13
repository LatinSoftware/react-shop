import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const API = "https://api.escuelajs.co/api/v1/products?limit=0&offset=30";
const ProductList = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getData = async url => {
			const response = await axios.get(url);
			setProducts(response.data);
		}
		getData(API);
	}, []);
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}



export default ProductList;
