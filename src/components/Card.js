import React from "react";

const Card = ({ name, email, id } ) => {
  return (
    <div className="col-md-4 col-xl-3 col-12">
      <div className="card myCardStyle">
        <img
          className="card-img-top"
          src={`https://robohash.org/${id}?size=150x150`}
          alt=""
        />
        <div className="card-body text-center">
          <h4 className="card-title letsTryId">{name}</h4>
          <p className="card-text">{email}</p>
        </div>
      </div>
    </div>
  );
  
};
export default Card;
