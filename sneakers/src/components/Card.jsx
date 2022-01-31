import React from 'react';

const Card = (props) => {
   const onClickButton = () => {
    alert(props.imageUrl)
   }

  return <div>
      <div className="card">
          <img width={133} height={112} src={props.imageUrl}/>
          <p>{props.title}</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>{props.price}ua</b>
            </div>
            <button onClick={onClickButton}>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div> 
  </div>;
};

export default Card;
