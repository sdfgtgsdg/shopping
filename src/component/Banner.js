import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from "./Product";
import './Banner.css';
import React, { Component } from "react";
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  const vege = "/img/vege.jpg"
  const cheese = "/img/cheese.jpg"
  const vege2 = "/img/vege2.jpg"
  const pork = "/img/pork.jpg"
  const new2 = "/img/new2.png"
  
         return (
          <>
          {/* <img className="newicon" src={new2}/>          */}
          <Carousel indicators={false} controls={false}
           carousel-control-prev-icon="false" 
           carousel-control-next-icon="false">    
            <Carousel.Item className="main-banner">       
               
            <p>신선야채 기획전</p>  
            <p className="p2">08.17 - 08.23</p>  
            <img src={vege}/>
            </Carousel.Item>
                     
            <Carousel.Item className="main-banner">
            
            <p>피자치즈 특가전!</p>  
            <p className="p2">마음껏 쟁여놓으세요!</p>  
            <img src={cheese}/>
            </Carousel.Item>
                    
            <Carousel.Item className="main-banner">
            
            <p>반찬 골라담기</p>  
            <p className="p2">갓 만든 반찬 바로 배송!</p>  
            <img src={vege2}/>
            </Carousel.Item>

            <Carousel.Item className="main-banner">
            
            <p>한돈 숙성 돼지고기</p>  
            <p className="p2">오늘 주문 내일 도착!</p>  
            <img src={pork}/>
            </Carousel.Item>

          </Carousel>
          </>
         );
       }
     // };
          
   export default Banner;