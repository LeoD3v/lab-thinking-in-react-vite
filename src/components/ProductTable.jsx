import ProductRow from "./ProductRow";
function ProductTable({ products }) {
  return (
    <table className="table-container">
      <thead className="table-head">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product._id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
