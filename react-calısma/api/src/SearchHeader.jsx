import { useState } from "react";

const SearchHeader = ({ search }) => {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // debugger;
    //! childdan parente atılan değer
    search(valueInput);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>ne arıyorsunuz?</label>
        <input type="text" value={valueInput} onChange={handleChange} />
        <div>{valueInput}</div>
      </form>
    </div>
  );
};

export default SearchHeader;
