import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { CartContext } from './context/MyContext';
import MyRouter from './routes/MyRouter';

function App() {

  const [cartCount, setCartCount] = useState([])

  const data = {
    cartCount,
    setCartCount
  }



  return (
    <div className="App">
      <CartContext.Provider value={data}>
        <Header />
        <MyRouter />
      </CartContext.Provider>
    </div>
  );
}

export default App;
