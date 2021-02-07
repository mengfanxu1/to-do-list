import { useState } from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddToList = () => {
    const addedItem = { value: input, finish: false };
    setList([...list, addedItem]);
  };
  const hanldeItemDelete = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };
  const handleItemFinished = (index) => {
    console.log(list);
    const item = { ...list[index], finish: list[index].finish ? false : true };
    console.log(item);
    setList([...list.slice(0, index), item, ...list.slice(index + 1)]);
    console.log(list);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className={"inputContainer"}
      />
      <button onClick={() => handleAddToList()} className={"button"}>
        {"Add"}
      </button>
      <div>
        {list.map((item, index) => {
          return (
            <div className={"item-conatiner"}>
              <div
                className={"item-name-container"}
                style={{
                  "text-decoration": list[index].finish
                    ? "line-through"
                    : "none"
                }}
                onClick={() => handleItemFinished(index)}
              >
                {item.value}
              </div>
              <div>
                <button
                  className={"button"}
                  onClick={() => hanldeItemDelete(index)}
                >
                  {"Delete"}
                </button>
                <button
                  className={"button"}
                  onClick={() => handleItemFinished(index)}
                >
                  {list[index].finish ? "Unfinish" : "Finish"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
