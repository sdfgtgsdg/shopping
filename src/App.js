import { useEffect, useState } from 'react';
import './App.css';
import Bar from './component/Bar';
import Main from './component/Main';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Heart from './pages/Heart';


function App() {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const cart3 = "/img/cart3.png"
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/menu/:id' element={<Menu/>} /> 
        <Route path='/cart/' element={<Cart/>} /> 
        <Route path='/search/' element={<Search/>} /> 
        <Route path='/heart/' element={<Heart/>} /> 
      </Routes>
        
      <div className="cart-icon">
    <img src={process.env.PUBLIC_URL + cart3} 
       onClick={() => {
        navigate('/cart'); }} style={{ cursor: 'pointer' }}/>
        </div>
        


      <Bar />
    </div>
  );
}

export default App;

