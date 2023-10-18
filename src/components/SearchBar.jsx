function SearchBar({ onChange, radioChange }) {
  return (
    <div>
      <input
        onChange={(event) => onChange(event)}
        type="text"
        placeholder="Search.."
      />
      <div>
        <label>
          <input onChange={(event) => radioChange(event)} type="checkbox" />
          <span>Show items in stock</span>
        </label>
      </div>
    </div>
  );
}
export default SearchBar;
