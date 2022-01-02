import { useEffect, useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";
import "../styles/main.css";
export const Grocery = () => {
  const [list, setList] = useState([]);
  const [showAll, setshowAll] = useState(true);
  const [page, setPage] = useState(1);
  const [lastpage, setLastpage] = useState(false);
  useEffect(() => {
    getTodo(page);
  }, [page]);
  const getTodo = (page) => {
    fetch(`http://localhost:3001/posts?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };

  useEffect(() => {
    getTodoPage();
  }, [page]);
  const getTodoPage = () => {
    fetch(`http://localhost:3001/posts`)
      .then((d) => d.json())
      .then((res) => {
        var length = res.length;
        var t = Math.ceil(length / 3);
        if (page >= t) {
          setLastpage(true);
        } else {
          setLastpage(false);
        }
      });
  };

  const handleChange = (data, img) => {
    const payload = {
      title: data,
      status: false,
      image: img,
      id: nanoid(7),
    };
    setList([...list, payload]);
    try {
      let res = fetch(`http://localhost:3001/posts`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = (id) => {
    setList(list.filter((list) => list.id !== id));
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      <button disabled={lastpage === true} onClick={() => setPage(page + 1)}>
        next
      </button>
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        prev
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
