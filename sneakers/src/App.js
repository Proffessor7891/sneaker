import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {


  const [cartOpened, setCartOpened] = React.useState(false);
  const [products, setProducts] = React.useState([])
  const [cartProducts, setCartProducts] = React.useState([
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
  ])

  React.useEffect(() => {
  fetch('https://61fa3f3b31f9c200175966fa.mockapi.io/products')
    .then((Response) => {
    return Response.json()
    })
    .then((json) => {
      setProducts(json);
    })
  }, [])


  return (
    <div className="wrapper">
      {cartOpened && <Drawer products={cartProducts} onClose={() => setCartOpened(false)} /> }
      <Header onClickCart={() => setCartOpened(true)}  />
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
