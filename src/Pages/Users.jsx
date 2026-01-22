import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h2 className="page-title">Users</h2>
      <div className="grid">
        {users.map(u => (
          <div className="card" key={u.id}>
            <h3>{u.name}</h3>
            <p>{u.email}</p>
            <span>{u.company.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
