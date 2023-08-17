import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from "./Product";
import './Sale.css';
import React, { Component } from "react";
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';


function Sale() {
 // const Sale = ({item}) => {
    const saledItem = useSelector((state) => state.saledItem);

        return (
          
          <Carousel indicators={false}>
              {
                saledItem.map((item, i) => {
                  const settings = {
                    slidesToShow: 3
                  };
                  return (
                    <Carousel.Item className="carousel-item">
                      <div style={{display:'flex'}}>
                        <Product  item={saledItem[i]}/>       
                        <Product  item={saledItem[i]}/>     
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