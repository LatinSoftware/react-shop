import React, { useState } from 'react';

const Buttom = () => {
    const [name, setName] = useState("Hola mundo");
    return ( 
        <div>
            <button>{name}</button>
        </div>
     );
}
 
export default Buttom;