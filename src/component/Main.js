import { useState } from "react";
import './Main.css';
import saled from "../redux/saledSlice";
import Sale from "./Sale";

const Main = () => {
  
  return (
    <>
    <div className="main-banner">
      <img src={process.env.PUBLIC_URL + '/img/vege.jpg'} />
       
    </div>
    <h5>반짝 타임 세일!</h5>
    <div className="saleList">
    <Sale className="sale" saled={saled} />
    <button class="pre">
<img src={process.env.PUBLIC_URL + '/img/pre.png'} />
</button>
</div>
    </>
  );


}

export default Main;