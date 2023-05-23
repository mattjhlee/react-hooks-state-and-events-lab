import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleClick(){
  setIsInCart(!isInCart)
}

  const inCart = isInCart ? "in-cart" : "";
  const itemText = isInCart ? "Remove From Cart" : "Add To Cart";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{itemText}</button>
    </li>
  );
}

export default Item;
