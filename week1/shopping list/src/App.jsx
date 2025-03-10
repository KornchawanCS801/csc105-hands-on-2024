import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); 


  const handleAddOrUpdate = () => {
    if (newItem.trim() === "") return;

    if (editingIndex !== null) {
    
      const updatedItems = [...items];
      updatedItems[editingIndex].text = newItem;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
    
      setItems([...items, { text: newItem, bought: false }]);
    }

    setNewItem("");
  };

  
  const toggleBought = (index) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null); 
  };


  const editItem = (index) => {
    setNewItem(items[index].text);
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="add" onClick={handleAddOrUpdate}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.bought ? "bought" : ""} onClick={() => toggleBought(index)}>
            {item.text}
            <div>
              <button className="edit" onClick={(e) => { e.stopPropagation(); editItem(index); }}>Edit</button>
              <button className="remove" onClick={(e) => { e.stopPropagation(); removeItem(index); }}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
