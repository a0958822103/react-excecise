import React, { useEffect, useState } from "react";

export default function UseList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 向 JSONPlaceholder 的假 API 請求使用者資料
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // 把資料存進 state
      });
  }, []);

  return (
    <div>
      <h2>Use List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

