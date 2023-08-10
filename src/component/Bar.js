import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Bar = () => {
  const navigate = useNavigate ();

return ( 
<Bar bg="white">
<Nav className="Bar">
  <Nav.Link onClick={()=> {navigate('/')}}>홈</Nav.Link>
  <Nav.Link onClick={()=> {navigate('/search')}}>검색</Nav.Link>
  <Nav.Link onClick={()=> {navigate('/like')}}>찜</Nav.Link>
  <Nav.Link onClick={()=> {navigate('/my')}}>마이</Nav.Link>
</Nav>
</Bar>

);
}

export default Bar;