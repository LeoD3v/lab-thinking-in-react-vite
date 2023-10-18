function ProductRow(props) {
  return (
    <>
      <tr
        key={props.product._id}
        className={props.product.inStock ? "instock row" : "outOfStock row"}
      >
        <th>{props.product.name}</th>
        <th>{props.product.price}</th>
      </tr>
    </>
  );
}

export default ProductRow;
