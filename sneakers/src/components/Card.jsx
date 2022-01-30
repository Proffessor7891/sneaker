import React from 'react';

const Card = (props) => {
  return <div>
      <div className="card">
          <img width={133} height={112} src={props.imageUrl}/>
          <p>{props.title}</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>{props.price}uah</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div> 
  </div>;
};

export default Card;
