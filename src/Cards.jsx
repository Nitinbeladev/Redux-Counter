import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/slices/AddCart";

function Cards(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "1rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.Image}</h5>
          <p className="card-text">Name : {props.Name}</p>
          <p className="card-text">Price : {props.Price} </p>
          <a
            className="btn btn-primary"
            onClick={() =>
              dispatch(addItem({ name: props.Name, price: props.Price }))
            }
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
