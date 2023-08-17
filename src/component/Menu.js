import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";


const Menu = () => {
  const navigate = useNavigate();
  const menuItem = useSelector((state) => state.menuItem);


  const menu = "/img/menu.png"
  

  return(
    <div className="menuList" onClick={()=>{
      navigate('./detail/'+ menuItem.id);
    }} style={{ cursor : 'pointer' }}>
      {menuItem.map((menu, i) => {
        return ( 
          <div key={i} >
          <img src={process.env.PUBLIC_URL + '/img/' + menu.title + ".png"} />
          <h4>{menu.name}</h4>   
          </div>        
        );
        })
      }
    </div>
  );
  }


 
export default Menu;