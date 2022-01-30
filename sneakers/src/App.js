import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [ 
  {name: 'krytie tyfela', price: 560 }, 
  {name: 'krytie tyfela', price: 560 }, 
  {name: 'krytie tyfela', price: 560 }
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
         
        <div className="shooses">
          
          
          {arr.map((obj) => (
            <Card
            title="mens blackv shoes"
            price={555}
            imageUrl="/img/zara.png"
          />
          ))}
            
        </div>      


      </div>
    </div>
  );
}

export default App;
