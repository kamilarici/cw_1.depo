import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import logo from "./assets/logo.png";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
const { v4: uuidv4 } = require("uuid");

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  // let data = "";
  const [userData, setUserData] = useState("");
  // const [visible, setVisible] = useState(false);
  const [task, setTask] = useState();
  const [title, setTitle] = useState("name");
  const [todo, setTodo] = useState([]);
  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // fetch("https://randomuser.me/api")
    //   .then((res) => res.json())
    //   .then((data) => setUserData(data.result[0]))
    //   .catch((err) => console.log(err));
    getUser();
  }, []);
  // const handleVisible = () => {
  //   setVisible(true);
  // };
  console.log(userData);
  const handleAdd = (id) => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        name: userData.name.first,
        email: userData.email,
        age: userData.dob.age,
        phone: userData.phone,
      },
    ]);
    getUser();
  };
  console.log(todo);
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  return (
    <main>
      <div className="block bcg-orange">
        <img className="logo" src={logo} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={userData?.picture?.large}
            alt="random user"
            className="user-img"
          />

          <p className="user-title">
            My <span>{title}</span> is
          </p>
          <p className="user-value">{task}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
                onMouseEnter={() => {
                  setTask(userData.name.first);
                  setTitle("name");
                }}
                // onMouseLeave={() => setVisible(false)}
              />
            </button>
            <button className="icon" data-label="email">
              <img
                src={mailSvg}
                alt="mail"
                id="iconImg"
                onMouseEnter={() => {
                  setTask(userData.email);
                  setTitle("email");
                }}
              />
            </button>
            <button className="icon" data-label="age">
              <img
                src={womanAgeSvg}
                alt="age"
                id="iconImg"
                onMouseEnter={() => {
                  setTask(userData.dob.age);
                  setTitle("age");
                }}
              />
            </button>
            <button className="icon" data-label="street">
              <img
                src={mapSvg}
                alt="map"
                id="iconImg"
                onMouseEnter={() => {
                  setTask(userData.location.city);
                  setTitle("street");
                }}
              />
            </button>
            <button className="icon" data-label="phone">
              <img
                src={phoneSvg}
                alt="phone"
                id="iconImg"
                onMouseEnter={() => {
                  setTask(userData.phone);
                  setTitle("phone");
                }}
              />
            </button>
            <button className="icon" data-label="password">
              <img
                src={padlockSvg}
                alt="lock"
                id="iconImg"
                onMouseEnter={() => {
                  setTask(userData.login.uuid.slice(4, 9));
                  setTitle("password");
                }}
              />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={getUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={() => handleAdd()}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
                <th className="th">DEL</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item) => {
                return (
                  <tr className="body-tr">
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                    <td onClick={() => handleDelete(item.id)}>❌</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
