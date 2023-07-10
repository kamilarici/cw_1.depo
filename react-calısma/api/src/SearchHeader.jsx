const SearchHeader = ({ search }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // debugger;
    search("can");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>ne arıyorsunuz?</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default SearchHeader;
