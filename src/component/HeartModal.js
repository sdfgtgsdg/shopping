import { Link, Navigate } from "react-router-dom";
import './HeartModal.css';

function HeartModal() {
  return (
    <div className="modalWrapper">
      <div className="modalContainer">
        <div>
          <p className="text">
            상품을 찜했어요!
          </p>
          {/* <div className="btnWrapper">           
            <Link to="/heart">
              <button className="heartModalBtn" onClick={() => {
       Navigate('/heart');}}>이동</button>
            </Link>
          </div> */}
        </div>
      </div>
      {/* <span className="background" /> */}
    </div>
  );
}

export default HeartModal;

