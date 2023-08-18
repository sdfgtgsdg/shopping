import { useState } from "react";
import './Tab.css';
import Product from "./Product";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BuyModal from "./BuyModal";




const Tab = ({tabNumber, item}) => {
  const[fade, setFade] = useState(null);
  const saledItem = useSelector((state) => state.saledItem);
  const saleprice = useSelector((state) => state.saleprice);

  const [showModal, setShowModal] = useState(false);


  // sale:'30%',
  // saleprice: 19500,
  // price: 25600,

return (
  <div className={"start " + fade}>
    {
    // 배열과 배열인덱스

      [
      
        <div className="vegeList">
        <button className="list-button">신상품순</button>
        <button className="list-button">베스트순</button>
        <button className="list-button">할인율순</button>
        <div className="vege-List" onClick={() => {
       Navigate('/detail/'+item);
      }} style={{ cursor: 'pointer' }}>
          <div className="vege-price">
          <Product item={saledItem[0]}/> 
          <p onClick={(e) => {
        e.stopPropagation();
        setShowModal(true)
      }}
      >
      {showModal ? <BuyModal /> : null}

          {saledItem[0].name} <br></br>
          {saledItem[0].saleprice} 
          </p>
          </div>
          
          <div className="vege-price">
          <Product item={saledItem[7]}/> 
          <p>
          {saledItem[7].name} <br></br>
          {saledItem[7].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[8]}/> 
          <p>
          {saledItem[8].name} <br></br>
          {saledItem[8].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[6]}/> 
          <p>
          {saledItem[6].name} <br></br>
          {saledItem[6].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[10]}/> 
          <p>
          {saledItem[10].name} <br></br>
          {saledItem[10].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[9]}/> 
          <p>
          {saledItem[9].name} <br></br>
          {saledItem[9].saleprice} 
          </p>
          </div>
        
        </div>
      </div>,
      

      <div className="vegeList">
        <button className="list-button">신상품순</button>
        <button className="list-button">베스트순</button>
        <button className="list-button">할인율순</button>
        <div className="vege-List" onClick={() => {
       Navigate('/detail/'+item);
      }} style={{ cursor: 'pointer' }}>
          <div className="vege-price">
          <Product item={saledItem[11]}/> 
          <p>
          {saledItem[11].name} <br></br>
          {saledItem[11].saleprice} 
          </p>
          </div>
          
          <div className="vege-price">
          <Product item={saledItem[12]}/> 
          <p>
          {saledItem[12].name} <br></br>
          {saledItem[12].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[13]}/> 
          <p>
          {saledItem[13].name} <br></br>
          {saledItem[13].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[14]}/> 
          <p>
          {saledItem[14].name} <br></br>
          {saledItem[14].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[15]}/> 
          <p>
          {saledItem[15].name} <br></br>
          {saledItem[15].saleprice} 
          </p>
          </div>

          <div className="vege-price">
          <Product item={saledItem[16]}/> 
          <p>
          {saledItem[16].name} <br></br>
          {saledItem[16].saleprice} 
          </p>
          </div>
        
        </div>

      </div>][tabNumber]
    }
  </div>
  );
  }

export default Tab;