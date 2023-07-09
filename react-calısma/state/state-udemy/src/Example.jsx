import { useState } from "react";

const Example = () => {
  //   const [name, setName] = useState("kml");
  //   const [surname, setSurname] = useState("arc");
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      please enter a name
      <br />
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={onChangeInput}
      />
      {/* <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      /> */}
      <br />
      <h1>{form.name}</h1>
      <br />
      please enter a surname
      <br />
      <input
        name="surname"
        type="text"
        value={form.surname}
        onChange={onChangeInput}
      />
      {/* <input
        type="text"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
      /> */}
      <br />
      <h1>{form.surname}</h1>
      <hr />
      {form.name} {form.surname}
    </div>
  );
};

export default Example;
