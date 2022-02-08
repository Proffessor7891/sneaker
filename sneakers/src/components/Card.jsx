import React from 'react';

const Card = ({ imageUrl, title, price, onClickLike, onPlus }) => {

  const [ isAdded, setIsAdded ] = React.useState(false)

   const onClickPlus = () => {
     onPlus()
    setIsAdded(!isAdded)
   }

  return <div>
      <div className="card">
          <div >
            <img onClick={onClickLike} width={10} height={10} src="/img/zara1.png" />
          </div>
          <img width={133} height={112} src={imageUrl}/>
          <p>{title}</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>{price}uah</b>
            </div>
            <div>
                <img onClick={onClickPlus} width={11} height={11} src={ isAdded ? "/img/1.png" : "/img/zara1.png"} />
            </div>
          </div>
        </div> 
  </div>;
};

export default Card;
