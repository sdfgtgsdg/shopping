

const Detail = ({}) => {
 


  return (

<div className="row">  
  <div className="detailpage-img">
  <img src={process.env.PUBLIC_URL + `/img/${item[id].title}.jpg` }/>
  </div>

  <div className="details">
  <h4 className="detailpage-name">{item[id].title}</h4>
          <p>{item[id].content}</p>
          <p>{item[id].price}</p>
          <p>{item[id].sale}</p>
  </div>
</div>  


  );
}

export default Detail;
