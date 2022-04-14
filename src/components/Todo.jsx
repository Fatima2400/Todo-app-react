import { useState } from "react";

export const Todo = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const addItem = () => {
    if (!data) {
    } else {
      setItem([...item, data]);
      setData("");
    }
  };
  const deleteItem = (id) => {
    const updated = item.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(updated);
  };
  return (
    <div>
      <input
        type="text"
        value={data}
        placeholder="type something"
        onChange={(e) => setData(e.target.value)}
      />

      <button className="btn " onClick={addItem}>
        {" "}
        Add
      </button>

      <div>
        {item.map((elem, ind) => {
          return (
            <div key={ind}>
              <h3>{elem}</h3>
              <button
                className="btnD"
                onClick={() => {
                  deleteItem(ind);
                }}
              >
                {" "}
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
