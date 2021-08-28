const Filter = ({ filter, handleFilterChange }) => {
  return <input type="text" value={filter} onChange={handleFilterChange} />;
};

export default Filter;
