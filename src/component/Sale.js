
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import './Sale.css';
import Slider from 'react-slick';

// function Sale() {
//   const saledItem = useSelector((state) => state.saledItem);





const Sale = ({item}) => {
  const saledItem = useSelector((state) => state.saledItem);
  const navigate = useNavigate();
  const settings = {
    speed: 500,
    slidesToShow: 1,
  }



  return (
   
    <Slider {...settings}>
    {saledItem.map((item) => {
          return (
            <Product  item={item}/>
                   
          )
        })
      }
    </Slider>

);
};
    {/* <div className="sale-container">
      <div className="sale">
      {
        saledItem.map((item) => {
          return (
            <Product  item={item}/>
          
          
          )
        })
      }
    </div> 
    </div> */}
    
export default Sale;