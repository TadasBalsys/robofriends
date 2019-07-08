import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {
  // if(true){
  //   throw new Error("Error");
  // }  
  return (
    <div className="container-fluid">
      <div className='row'>
        {robots.map((user, i) => {
          return <Card key={user.id} robot={user} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
