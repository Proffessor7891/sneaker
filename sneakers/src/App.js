import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {
  const[products, setProducts] = React.useState([
    {
     "title": "krytie tyfela",
     "price": "120",
     "imageUrl": "/img/sneakers/2.jpg"
    },
    {
     "title": "tyfela",
     "price": "250",
     "imageUrl": "/img/sneakers/3.jpg"
    },
    {
     "title": "krytie ",
     "price": "820",
     "imageUrl": "/img/sneakers/4.jpg"
    },
    {
     "title": "nekrytie tyfela",
     "price": "330",
     "imageUrl": "/img/sneakers/2.jpg"
    },
    {
     "title": "krytie tyfela",
     "price": "120",
     "imageUrl": "/img/sneakers/2.jpg"
    },
    {
     "title": "tyfela",
     "price": "250",
     "imageUrl": "/img/sneakers/3.jpg"
    },
    {
     "title": "krytie ",
     "price": "820",
     "imageUrl": "/img/sneakers/4.jpg"
    },
    {
     "title": "nekrytie tyfela",
     "price": "330",
     "imageUrl": "/img/sneakers/2.jpg"
    }
   ])


  return (
    <div className="wrapper">
     
     <div className="overlay">
      <Drawer/>
    </div>

      <Header/>
      <div className="content">
         <h1>all shooes</h1>
         <input placeholder="search..."/>
         
        <div className="shooses">
          
          
          {products.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClickLike={() => console.log("like")}
            onClickPlus={() => console.log("plus")}
          />
          ))}
            
        </div>      


      </div>
    </div>
  );
}

export default App;
