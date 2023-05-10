import { useState } from "react";
import "./App.css";
import { StockGraph } from "./components/StockGraph/StockGraph";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <br />
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide" : "Show"}
      </button>
      {isShow && <StockGraph />}
    </>
  );
}

export default App;
