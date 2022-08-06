import React from 'react'
import ProductInfo from './ProductInfo';

import '@styles/product-detail.scss';
import icon from '@icons/icon_close.png';
const ProductDetail = () => {
    return ( 
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={icon} alt="close" />
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <ProductInfo />
        </aside>

     );
}
 
export default ProductDetail;