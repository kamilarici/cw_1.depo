import { useState } from "react";
import { data } from "../helper/data";
import "./main.css";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  const [datas, setDatas] = useState();
  //   const [fakeData, setFakeData] = useState();
  const handleFilter = (item, i) => {
    setDatas(data?.filter((datam) => datam.date === item.date));
  };
  console.log(datas);
  return (
    <div className="container">
      <div className="main-div">
        {data?.map((item, i) => {
          return (
            <Link to={`${item.date}`} onClick={() => handleFilter(item)}>
              {item.date}
            </Link>
          );
        })}
        <Outlet />
        {datas?.map((item) => {
          return (
            <div>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              <p>{item.tags}</p>
              <h3>⭐⭐⭐⭐ {item.rate} /10</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
