import React from 'react'

const OrderList = ({Product}) => {
    return ( 
        <div className='OrderList'>
            <Product/>
            <Product/>
            <Product/>
        </div>
     );
}
 
export default OrderList;