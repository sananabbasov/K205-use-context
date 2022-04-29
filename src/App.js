import './App.css';
import Header from './components/Header/Header';
import { CartContext } from './context/MyContext';
import MyRouter from './routes/MyRouter';

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={"0"}>
        <Header />
        <MyRouter />
      </CartContext.Provider>
    </div>
  );
}

export default App;
