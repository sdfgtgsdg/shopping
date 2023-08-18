import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from "./Product";
import './Sale.css';
import React, { Component } from "react";
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import './Recent.css';


function Sale() {
 // const Sale = ({item}) => {
    const saledItem = useSelector((state) => state.saledItem);
const arr = [0,3]
        return (
          
          <Carousel indicators={false}>
              {
                arr.map((n, i) => {
                 
                  return (
                    <Carousel.Item className="carousel-item">
                      <div className="list" style={{display:'flex'}}>
                        <Product  item={saledItem[n]}/>       
                        <Product  item={saledItem[n+1]}/>     
                        <Product  item={saledItem[n+2]}/> 
                      </div>
                    </Carousel.Item>

                    )
                  })
                }
              
          </Carousel>
        );
      }
    // };
         
  export default Sale;

// const Sale = ({item}) => {
//   const saledItem = useSelector((state) => state.saledItem);
//   const navigate = useNavigate();



//   return (
   
//     <Slider {...settings}>
//     {saledItem.map((item) => {
//           return (
//             <Product  item={item}/>
                   
//           )
//         })
//       }
//     </Slider>

// );
// };
//     <div className="sale-container">
//       <div className="sale">
//       {
//         saledItem.map((item) => {
//           return (
//             <Product  item={item}/>
          
          
//           )
//         })
//       }
//     </div> 
//     </div> 
    
// export default Sale;