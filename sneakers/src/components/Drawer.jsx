import React from 'react';

const Drawer = ({onClose, products = [] }) => {
  return <div>
      <div className="drawer">
         <h2>corsina</h2>
         <button onClick={onClose}>c</button>
      <div className="items">

        {products.map((obj) => (
          
        <div className="cartItem">
        <div style={{ backgroundImage: `url(${obj.imageUrl})`}}
        className='cartItemImg'>

        </div>
        <div>
          <p>{obj.title}</p>
          <b>{obj.price}</b>
        </div>     
        <button>0</button>
    </div>
        ))}
        
      </div>
        <ul>
          <li>
            <span>total</span>
            <div></div>
            <b>3400 uah</b>
          </li>
          <li>
            <span>nds 5%</span>
            <div></div>
            <b>17 uah</b>
          </li>
        </ul>
        <button>make order</button>

      </div>
  </div>;
};

export default Drawer;
