import React from "react";
import Image24 from "../../assets/image24.png";
import User from "../../assets/user.jpeg.png";
import { CiHeart } from "react-icons/ci";

const ListCard = ({ item }) => {
  return (
    <div>
      <div className="each__property">
        <div className="img__test__property">
          <div className="div-image">
            <img className="each__image" src={item.image} alt="" />
            <p className="taggg">For Rent</p>
          </div>
          <h4 className="property__price">
            {item.price} LKR <span>/Month</span>
          </h4>
          <h2 className="property__name">{item.title}</h2>
        </div>
        <div className="text__each__property">
          <div className="other__property__tag">
            <h5>{item.bedrooms} Bedrooms</h5>
            <h5 className="bath">{item.bathroom || "N/A"} Bathrooms</h5>
            <h5>{item.size} Square FT</h5>
          </div>

          <div className="property__tag">
            <div className="yeah_pr">
              <div className="img__user">
                <img className="property__user" src={User} alt="" />
              </div>

              <div className="user__property__tag">
                <h3>{item.sellerName}</h3>
                <h6>Property Seller</h6>
              </div>
            </div>

            <span className="like__icon">
              <CiHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
