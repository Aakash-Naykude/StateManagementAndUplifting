import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";
import "../styles/main.css";
export const Grocery = () => {
  const [list, setList] = useState([]);
  const [showAll, setshowAll] = useState(true);
  const handleChange = (data) => {
    console.log(data);
    const payload = {
      title: data,
      status: false,
      id: nanoid(7),
    };
    setList([...list, payload]);
  };
  const handleDelete = (id) => {
    setList(list.filter((list) => list.id !== id));
  };
  const handleToggle = (id) => {
    const update = list.map((e) =>
      e.id === id ? { ...e, status: !e.status } : e
    );
    setList(update);
  };
  return (
    <div>
      <GroceryInput getData={handleChange} />
      <button onClick={() => setshowAll(!showAll)}>
        {showAll ? "Show only purchased" : "show only not purchased"}
      </button>
      <div className="showList">
        {list
          .filter((e) => (showAll ? true : !e.status))
          .map((e, i) => (
            <GroceryList
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              key={e.id}
              {...e}
              inplist={list}
            />
          ))}
      </div>
    </div>
  );
};
