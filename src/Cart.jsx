import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const Items = useSelector((state) => state);
  const Total = Items.CurrentCart.reduce((acc, item) => acc + item.price, 0);
  console.log(Items);
  return (
    <>
      <div>
        Items : {Items.CurrentCart.length} <br />
        Total : {Total}
      </div>
      <div>
        {Items.CurrentCart.map((item) => {
          return (
            <>
              <div>
                <span>Name : {item.name}</span>{" "}
                <span>Price : {item.price}</span> <button>X</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
