import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if(true){
  //   throw new Error("Error");
  // }
  return (
    <div className="row card-columns">
      {robots.map((user, i) => {
        return <Card key={user.id} robot={user} />;
      })}
    </div>
  );
};

export default CardList;
