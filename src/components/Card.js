import React from "react";

const Card = ({ robot: { name, email, id } }) => {
  return (
    <div className="card col-3 myCardStyle">
      <img
        className="card-img-top"
        src={`https://robohash.org/${id}?size=150x150`}
        alt=""
      />
      <div className="card-body text-center">
        <h4 className="card-title letsTryId"  >{name}</h4>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
  
};
export default Card;
