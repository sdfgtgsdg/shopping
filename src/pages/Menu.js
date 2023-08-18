import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav} from "react-bootstrap";
import menuItem from "../redux/menuSlice";
import './Menu.css';
import Banner from "../component/Banner";
import Tab from "../component/Tab";



const Menu = () => {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState(0);
  const [tabNumber, setTabNumber] = useState(0);

  useEffect(()=> {
    setPageTitle(menuItem.name);
    }, [])
  
    const goBack = () => {
      navigate(-1);
    }

    const pre= "/img/pre.png"
    const search= "/img/search.png"
    

    return (
      <>
      <div className="menu-header">
      <img className="pre-icon" src={process.env.PUBLIC_URL + pre} onClick={() => {
       navigate('/');
      }} style={{ cursor: 'pointer' }}/>

      <h3 className="Menu-name">채소/과일</h3>
      <img className="search-icon" src={process.env.PUBLIC_URL + search} onClick={() => {
       navigate('/search/');
      }} style={{ cursor: 'pointer' }}/>
      </div>

      <Banner className="menu-banner"/>
      
      <Nav className="tab" justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setTabNumber(0)
          }}>신선채소</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setTabNumber(1)
          }}>신선과일</Nav.Link>
        </Nav.Item>
       
      </Nav>
      <Tab tabNumber={tabNumber}/>
      
      </>
  );
}

export default Menu;