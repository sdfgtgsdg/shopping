
import { navigate, useNavigate } from 'react-router-dom';
import './Product.css';
import { useState } from 'react';
import HeartModal from "./HeartModal";
import BuyModal from './BuyModal';


function Product({item}) {
  
  const navigate = useNavigate();
  const cart2 = "/img/cart2.png"
  const heart2 = "/img/heart2.png"


  const [showModal, setShowModal] = useState(false);


return (

 
  <div className="product">
    
  {/* <img src={process.env.PUBLIC_URL + '/img/onion1.jpg'} /> */}
 
     <div className="saleproduct" key={item.id} onClick={() => {
       navigate('/detail/'+item);
      }} style={{ cursor: 'pointer' }}>

        <img className="heart-img" src={process.env.PUBLIC_URL + heart2}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true)
        }}/>
        {showModal ? <HeartModal /> : null}


      <img className="cart-img" src={process.env.PUBLIC_URL + cart2} 
       onClick={() => 
        alert('장바구니에 상품을 담았습니다')} style={{ cursor: 'pointer' }}/>

      <img className="product-img" src={process.env.PUBLIC_URL + `/img/${item.title}.jpg`} 
       onClick={(e) => {
        e.stopPropagation();
        setShowModal(true)
      }}
      />
      {showModal ? <BuyModal /> : null}
      </div>
  </div>



    
);
}

export default Product;