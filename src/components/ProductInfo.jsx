import React from 'react'
import '../styles/product-info.scss';
const ProductInfo = () => {
    return ( 
        <div className='ProductInfo'>
            <div className="product-info">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button className="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </div>
     );
}
 
export default ProductInfo;