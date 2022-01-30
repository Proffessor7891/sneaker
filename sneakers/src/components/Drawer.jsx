import React from 'react';

const Drawer = () => {
  return <div>
      <div className="drawer">
         <h2>corsina</h2>
         <button>c</button>
      <div className="items">

        <div className="cartItem">
            <img width={70} height={70} src="/img/sneakers/1.jpg"/>
            <div>
              <p>mens shoose</p>
              <b>999 uah</b>
            </div>     
            <button>0</button>
        </div>
        
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
