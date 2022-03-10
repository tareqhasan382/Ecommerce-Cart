import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Cart from './Components/Cart';
import data from './data';
import { useState } from 'react';
function App() {
  const {products} = data;
  //manage cart Item
  const [cartItems, setCartItems] = useState([]);
  //Add card increment
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => 
        x.id === product.id ? {...exist, qty:exist.qty +1} : x 
        )
        
        );
    } else{
      setCartItems([...cartItems, {...product, qty: 1 }]);
    }
  };
  //Remove card decrement
  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => 
        x.id === product.id ? {...exist, qty:exist.qty -1} : x 
        )
        
        );
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className='row'>
      <Main onAdd={onAdd} products={products} ></Main>
      <Cart 
      onAdd={onAdd} 
      onRemove={onRemove} 
      cartItems={cartItems}>
      </Cart>
      </div>
      
    </div>
  );
}

export default App;
