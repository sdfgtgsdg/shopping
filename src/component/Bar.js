import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Bar.css';


const Bar = () => {
  const navigate = useNavigate ();

return ( 
  
  <div className="Bar">
<Nav className="Bar-icon">
  <div className="menuBar" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/')}}>
  <img src={process.env.PUBLIC_URL + '/img/home.png'} />
  </button>
  <p className="Bar-name" >홈</p>
  </div>
  <div className="menuBar" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/search')}}>
  <img src={process.env.PUBLIC_URL + '/img/search.png'} />
  </button>
  <p className="Bar-name" >검색</p>
  </div>
  <div className="menuBar" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/heart')}}>
  <img src={process.env.PUBLIC_URL + '/img/heart.png'} />
  </button>
  <p className="Bar-name" >찜</p>
  </div>
  <div className="menuBar" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/my')}}>
  <img src={process.env.PUBLIC_URL + '/img/my.png'} />
  </button>
  <p className="Bar-name" >마이</p>
  </div>
</Nav>



{/* <Nav className="Bar-name">
 
   <Nav.Link className="menu" 
  onClick={()=> {navigate('/')}}>홈</Nav.Link>

  <Nav.Link className="menu" 
  onClick={()=> {navigate('/search')}}>검색</Nav.Link>

  <Nav.Link className="menu" 
  onClick={()=> {navigate('/like')}}>찜</Nav.Link>

  <Nav.Link className="menu" 
  onClick={()=> {navigate('/my')}}>마이</Nav.Link>
</Nav> */}
</div>
);
}

export default Bar;