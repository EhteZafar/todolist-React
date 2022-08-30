import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setNewItem(newValue);
  }

  function addItem() {
    setItems((pervItems) => {
      return [...pervItems, newItem];
    });
    setNewItem("");
  }

  function deleteItem(id) {
    // console.log(id);
    setItems((pervItems) => {
      return pervItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                item={item}
                onClicked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
