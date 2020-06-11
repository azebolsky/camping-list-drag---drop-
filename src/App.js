import React from "react";
import Items from "./components/Items";
import Item from "./components/Item";

function App() {
  return (
    <div>
      <main className="container">
        <Items id="item-1" className="items">
          <Item id="card-1" className="card" draggable="true">
            <p>Item One</p>
          </Item>
        </Items>
        <Items id="item-2" className="items">
          <Item id="card-2" className="card" draggable="true">
            <p>Item Two</p>
          </Item>
        </Items>
      </main>
    </div>
  );
}

export default App;
