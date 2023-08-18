import { useState } from "react";
import './Main.css';
import Sale from "./Sale";
import Banner from "./Banner";
import MenuList from "./MenuList";
import Recent from "./Recent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";





const Main = () => {

  
  return (
    <>
    <Banner />
    {/* <div className="main-banner">
      <img src={process.env.PUBLIC_URL + '/img/vege.jpg'} /> */}
       
    {/* </div> */}
    <h5 className="timesale" style={{marginTop:'30px'}}>⏰반짝 타임 세일!</h5>
    <div className="saleList">
    <Sale className="sale" />
    <MenuList />
    <h6 className="buy" style={{marginTop:'33px'}}>📍 자주 구매하신 상품이에요!</h6>
    <Recent className="recentList" />
   
    </div>
    
      </>
  );


}

export default Main;