import { useNavigate } from "react-router-dom";
import './Heart.css';
      
const Heart = ({}) => {
 
    const navigate = useNavigate();
    const pre= "/img/pre.png"
    const search= "/img/search.png"
    
      const goBack = () => {
        navigate(-1);
      }

 return (

      
      <>
      <div className="menu-header">
      <img className="pre-icon" src={process.env.PUBLIC_URL + pre} onClick={() => {
       navigate('/');
      }} style={{ cursor: 'pointer' }}/>

      <h3 className="Menu-name">찜목록</h3>
      <img className="search-icon" src={process.env.PUBLIC_URL + search} onClick={() => {
       navigate('/search/');
      }} style={{ cursor: 'pointer' }}/>
      </div>
      <div className="carted"></div>
      <div className="carted"></div>
      <div className="carted"></div>
      <div className="carted"></div>
      <div className="carted"></div>
      <div className="carted"></div>



      </>

      );
    }
    
      export default Heart;