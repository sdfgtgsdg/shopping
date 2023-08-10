import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Bar from './component/Bar';



// const Detail = lazy(()=>import('./component/Detail'));
// const ProductList = lazy(()=>import('./component/ProductList'));
// const Cart = lazy(()=>import('./component/Cart'));

function App() {
  const [saleProduct, setSaleProduct ] = useState([]);




  return (
    <div className="App">
       <Bar />
    </div>
  );
}

export default App;
