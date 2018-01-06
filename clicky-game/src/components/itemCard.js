import React from "react";
import '../App.css';

const ItemCard = props => (
  <div className="col s3">
    <div className="sizing hoverable" onClick={() => props.shuffle()}>
      <img onClick={() =>props.add(props.keyy)} className="image" alt={props.alty} 
      src={props.srcy} value={props.keyy} />
  </div>
  </div>
);

export default ItemCard;
