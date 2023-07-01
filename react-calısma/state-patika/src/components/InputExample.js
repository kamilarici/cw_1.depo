import { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState("kml");
  const [surname, setSurname] = useState("arc");
  return (
    <div>
      <div>
        name <br />
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br /> <br />
        surname <br />
        <input
          type="text"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <br />
        <br />
        {name} {surname}
      </div>
    </div>
  );
};

export default InputExample;
