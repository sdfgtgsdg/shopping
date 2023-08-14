import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Bar.css';


const Bar = () => {
  const navigate = useNavigate ();

return ( 
  
  <div className="Bar">
<Nav className="Bar-icon">
  <div className="menu" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/main')}}>
  <img src={process.env.PUBLIC_URL + '/img/home.png'} />
  </button>
  <p>홈</p>
  </div>
  <div className="menu" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/main')}}>
  <img src={process.env.PUBLIC_URL + '/img/search.png'} />
  </button>
  <p>검색</p>
  </div>
  <div className="menu" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/main')}}>
  <img src={process.env.PUBLIC_URL + '/img/heart.png'} />
  </button>
  <p>찜</p>
  </div>
  <div className="menu" >
  <button class="menu-icon" type="button"  onClick={()=> {navigate('/main')}}>
  <img src={process.env.PUBLIC_URL + '/img/my.png'} />
  </button>
  <p>마이</p>
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