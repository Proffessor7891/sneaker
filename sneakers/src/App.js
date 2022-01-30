import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
          
        <Card/>
        <Card/>
        <Card/>
        <Card/>
          
        </div>      


      </div>
    </div>
  );
}

export default App;
