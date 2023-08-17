import { useEffect, useState } from 'react';
import './App.css';
import Bar from './component/Bar';
import Main from './component/Main';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [product, setProduct] = useState([]);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>

      <Bar />
    </div>
  );
}

export default App;

