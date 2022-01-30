import React from 'react';

const Card = () => {
  return <div>
      <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg"/>
          <p>mens shoes</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>999 uah</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div> 
  </div>;
};

export default Card;
