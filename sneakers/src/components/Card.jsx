import React from 'react';

const Card = (props) => {

  const [ isAdded, setIsAdded ] = React.useState(false)

   const onClickPlus = () => {
    setIsAdded(!isAdded)
   }

  return <div>
      <div className="card">
          <div >
            <img onClick={props.onClickLike} width={10} height={10} src="/img/zara1.png" />
          </div>
          <img width={133} height={112} src={props.imageUrl}/>
          <p>{props.title}</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>{props.price}uah</b>
            </div>
            <div>
                <img onClick={onClickPlus} width={11} height={11} src={ isAdded ? "/img/1.png" : "/img/zara1.png"} />
            </div>
          </div>
        </div> 
  </div>;
};

export default Card;
