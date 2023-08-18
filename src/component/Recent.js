import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from "./Product";
import './Sale.css';
import React, { Component } from "react";
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';


function Recent() {
    const recentItem = useSelector((state) => state.recentItem);
    console.log(recentItem)

const arr = [0,3]
        return (
          
          <Carousel indicators={false}>
              {
                arr.map((n, i) => {
                 
                  return (
                    <Carousel.Item >
                      <div className="recentlist" style={{display:'flex'}}>
                        <Product  item={recentItem[n]}/>       
                        <Product  item={recentItem[n+1]}/>     
                        <Product  item={recentItem[n+2]}/> 
                      </div>
                    </Carousel.Item>

                    )
                  })
                }
              
          </Carousel>
        );
      }
    // };
         
  export default Recent;

