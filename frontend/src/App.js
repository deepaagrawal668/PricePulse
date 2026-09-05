import React from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <h1>PricePulse</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
