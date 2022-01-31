import React from 'react';

const Card = (props) => {
   const onClickButton = () => {
    alert(props.imageUrl)
   }

  return <div>
      <div className="card">
          <div onClick={props.onClickLike}>
            <img  width={10} height={10} src="/img/zara1.png" />
          </div>
          <img width={133} height={112} src={props.imageUrl}/>
          <p>{props.title}</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>{props.price}uah</b>
            </div>
            <button onClick={props.onClickPlus}>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div> 
  </div>;
};

export default Card;
