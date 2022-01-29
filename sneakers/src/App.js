
function App() {
  return (
    <div className="wrapper">
     
     <div className="overlay">
      <div className="drawer">
         <h2>corsina</h2>

        <div className="cartItem">
            <img width={70} height={70} src="/img/sneakers/1.jpg"/>
            <div>
              <p>mens shoose</p>
              <b>999 uah</b>
            </div>
            <button>0</button>
        </div>

      </div>
    </div>

      <header>
        <div className="header-left">
          <img width={40} height={40} src="/img/zara1.png" />
          <div className="header-info">
            <h3>React Sneakers</h3>
            <p>shoose magnaise</p>
          </div>
        </div>

        <div className="header-right">
        <ul>
          <li>
          <img width={18} height={18} src="/img/zara1.png" />
            <span>1205 uah</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/zara1.png" />
          </li>
        </ul>
        </div>
      </header>
      <div className="content">
         <h1>all shooes</h1>
         
        <div className="shooses">
          
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg"/>
          <p>mens shoes</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>999 uah</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div>  
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg"/>
          <p>mens shoes</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>999 uah</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div>  
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg"/>
          <p>mens shoes</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>999 uah</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div>  
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg"/>
          <p>mens shoes</p>
          <div className="cardBottom">
            <div className="cardPrice">
              <span>price</span>
              <b>999 uah</b>
            </div>
            <button>
                <img width={11} height={11} src="/img/zara1.png" />
            </button>
          </div>
        </div>  
          
        </div>      


      </div>
    </div>
  );
}

export default App;
