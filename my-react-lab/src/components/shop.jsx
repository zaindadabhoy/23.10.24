import React, { useState } from "react";

function Shop() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [currentItem, setCurrentItem] = useState({ name: "", price: 0 });
  const [totalCost, setTotalCost] = useState(0);

  const addItem = () => {
    if (itemName && itemPrice) {
      setCurrentItem({ name: itemName, price: Number(itemPrice) });
      setTotalCost((prev) => prev + Number(itemPrice));
      setItemName("");
      setItemPrice(0);
    }
  };

  const removeItem = () => {
    setTotalCost((prev) => prev - currentItem.price);
    setCurrentItem({ name: "", price: 0 });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      <h3>Current Item: {currentItem.name ? `${currentItem.name} - $${currentItem.price}` : "None"}</h3>
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
}

export default Shop;
