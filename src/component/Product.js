
import { navigate, useNavigate } from 'react-router-dom';
import './Product.css';
import { useSelector } from 'react-redux';


function Product({item}) {
  
  const navigate = useNavigate();


return (

 
  <div className="product">
    
  {/* <img src={process.env.PUBLIC_URL + '/img/onion1.jpg'} /> */}
 
     <div className="saleproduct" key={item.id} onClick={() => {
       navigate('/detail/'+item);
      }} style={{ cursor: 'pointer' }}>
      <img src={process.env.PUBLIC_URL + `/img/${item.title}.jpg`} />
      </div>
  </div>



    
);
}

export default Product;