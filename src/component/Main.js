import { useState } from "react";
import './Main.css';
import saled from "../redux/saledSlice";
import Sale from "./Sale";
import Banner from "./Banner";
import Menu from "./Menu";


const Main = () => {
  
  return (
    <>
    <Banner />
    {/* <div className="main-banner">
      <img src={process.env.PUBLIC_URL + '/img/vege.jpg'} /> */}
       
    {/* </div> */}
    <h5 style={{marginTop:'30px'}}>⏰반짝 타임 세일!⏰</h5>
    <div className="saleList">
    <Sale className="sale" saled={saled} />
    <Menu />
</div>
    </>
  );


}

export default Main;