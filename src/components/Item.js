import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false);
  const buttonItem = (item) ? "Remove From Cart" : "Add to Cart";
  const classLi = (item) ? "in-cart" : "";
  const classButton = item ? "remove" : "add";
  function handleItem() {
    setItem((item) => !item)
  }
  return (
    <li className={classLi}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className={classButton}>{buttonItem}</button>
    </li>
  );
}

export default Item;
