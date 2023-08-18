import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import './MenuList.css';


const MenuList = ({}) => {
  const menuItem = useSelector((state) => state.menuItem);
  const navigate = useNavigate();


  const menu = "/img/menu.png"
  

  return(
    <div className="menuList" style={{ cursor : 'pointer' }}>
      {menuItem.map((menu, i) => {
        return ( 
          <div className="lists" key={i} >
          <img src={process.env.PUBLIC_URL + '/img/' + menu.title + ".png" }
          onClick={()=>{
            navigate('./menu/'+ menu.id);
          }} style={{ cursor : 'pointer' }}/>

          <h7 className="list-name">{menu.name}</h7>   
          </div>        
        );
        })
      }
    </div>
  );
  }


 
export default MenuList;