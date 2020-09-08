import React, { useState } from 'react';

import data from "./sampledata.json";


function App() {
  const [products, setProduct] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div className="grid-container">
      <header>
        <a href='#'>Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">Product</div>
          <div className="sidebar">Sidebar</div>
        </div>
      </main>
      <footer>
        All Rights are reserved
      </footer>
    </div>
  );
}

export default App;
