import React from "react";
import { useSearchParams } from "react-router-dom";
const Members = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <div>
      <div>members</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        aktif üyeler
      </button>
      <button onClick={() => setSearchParams({})}>tüm üyeler</button>

      {isActive ? <h2>aktif üyeler</h2> : <h2>tüm üyeler</h2>}
    </div>
  );
};

export default Members;
