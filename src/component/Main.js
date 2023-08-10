const Main = ({Product}) => {
  const [viewSaleCount, setViewSaleCount] = useState(7);
  let viewSaleProduct = SaleProduct.slice(0, viewCount);

  const [viewCount, setViewCategory] = useState(7);
  let viewCategory = Category.slice(0, viewCategory);


  const [viewRecentCount, setViewRecentCount] = useState(12);
  let viewRecentProduct = RecentProduct.slice(0, viewRecentCount);

  return (
    <>
    <div className='main-banner'>
    <img src={'../img/vege.jpg'} />
    </div>

    <div className="container sale">
        {
          viewSaleProduct.map((data, i)=> {
            return (
              <Cart data={data} key={i}/>
            );
          })
        }
      </div>

      <div className="container category">
        {
          viewSaleProduct.map((data, i)=> {
            return (
              <Cart data={data} key={i}/>
            );
          })
        }
      </div>
   
      <div className="container recentproduct">
        {
          viewSaleProduct.map((data, i)=> {
            return (
              <Cart data={data} key={i}/>
            );
          })
        }
      </div>

    </>
  );


}

export default Main;