// src/components/ProductsPage.jsx
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
import jsonData from "./../data.json";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [letterSearched, setLetterSearch] = useState("");
  const [inStock, setStock] = useState(true);
  function searchFunction(event) {
    const letter = event.target.value;
    console.log(letter);
    if (letter === "") {
      setProducts(jsonData);
    } else {
      const filterList = products.filter((item) => item.name.includes(letter));
      setLetterSearch(letter);
      setProducts(filterList);
    }
  }

  function radioFilter(event) {
    const checkboxEvent = event.target.checked;
    if (checkboxEvent) {
      console.log(checkboxEvent);
      const inventory = products.filter((item) => item.inStock);
      setProducts(inventory);
    } else setProducts(jsonData);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChange={searchFunction} radioChange={radioFilter} />
      <ProductTable products={products} />
    </div>
  );
}
export default ProductsPage;
