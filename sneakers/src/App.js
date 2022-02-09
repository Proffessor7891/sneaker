import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {


  const [cartOpened, setCartOpened] = React.useState(false);
  const [products, setProducts] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartProducts, setCartProducts] = React.useState([])

  React.useEffect(() => {
  fetch('https://61fa3f3b31f9c200175966fa.mockapi.io/products')
    .then((Response) => {
    return Response.json()
    })
    .then((json) => {
      setProducts(json);
    })
  }, [])

  const addingToCart = (product) => {
   setCartProducts(prev => [...prev, product ]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <div className="wrapper">
      {cartOpened && <Drawer products={cartProducts} onClose={() => setCartOpened(false)} /> }
      <Header onClickCart={() => setCartOpened(true)}  />
      <div className="content">
         <h1>{searchValue ? `finding: "${searchValue}"` : 'all'}</h1>
         <div className="searchBlock">
         <input onChange={onChangeSearchInput} value={searchValue} placeholder="search..."/>
         {searchValue && (<img
         onClick={() => setSearchValue('')}
          width={10} height={10} 
          src="/img/zara.png"/>)}
         </div>
        <div className="shooses">
          
          
          {products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
            <Card
            key={index}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClickLike={() => console.log("like")}
            onPlus={(product) => addingToCart(product)}
          />
          ))}
            
        </div>      


      </div>
    </div>
  );
}

export default App;
