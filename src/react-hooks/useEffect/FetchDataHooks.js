import axios from "axios";
import React, { useState, useEffect } from "react";
import "./DataFetch.css";
import SearchIcon from "@mui/icons-material/Search";

function FetchDataHooks() {
  const [nameFilter, setNameFilter] = useState("");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      let data = res.data;
      setUsers(data);
    });
  }, []);

  const filterNames = (users) => {
    const temp = users.filter((user) => user.name.includes(nameFilter));
    return temp.map((user) => <ul key={user.id}>{user.name}</ul>);
  };

  return (
    <div>
      <label>User Names Form API</label>

      <div className="filter">
        <SearchIcon />

        <input
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <div className="data">{filterNames(users)}</div>
    </div>
  );
}

export default FetchDataHooks;
