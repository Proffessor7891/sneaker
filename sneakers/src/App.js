import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [ 
  {title: 'krytie tyfela', price: 560, imageUrl: "/img/sneakers/2.jpg" }, 
  {title: 'nekrytie tyfela', price: 60, imageUrl: "/img/sneakers/3.jpg" }, 
  {title: 'krytie sapogi', price: 5770, imageUrl: "/img/sneakers/4.jpg" }
]
function App() {
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
          
          
          {arr.map((obj) => (
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
