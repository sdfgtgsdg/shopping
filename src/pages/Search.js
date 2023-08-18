import { useNavigate } from "react-router-dom";
import './Search.css';
      
const Search = ({}) => {
 
    const navigate = useNavigate();
    const pre= "/img/pre.png"
    const search= "/img/search.png"
    
      const goBack = () => {
        navigate(-1);
      }

 return (

      
      <div className="searchHeader">
      <div className="search-header">
      <img className="pre-icon" src={process.env.PUBLIC_URL + pre} onClick={() => {
       navigate('/');
      }} style={{ cursor: 'pointer' }}/>

      <h3 className="Menu-name">검색</h3>
      <img className="search-icon" src={process.env.PUBLIC_URL + search} onClick={() => {
       navigate('/search/');
      }} style={{ cursor: 'pointer' }}/>
      </div>
      <input type={"text"} className={"search"} placeholder="무엇을 찾고계세요?"/>


      </div>

      );
    }
    
      export default Search;