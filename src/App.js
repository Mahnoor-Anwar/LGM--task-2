import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [users, setUser] = useState([]);

  const loadUser = async () => {
    const response = await fetch("https://api.github.com/users");
    const loadresponse = await response.json();
    setUser(loadresponse);
    // document.write(setUser);
  };
  return (
    <div className="App">
      <h1>LGM-task-2</h1>
      <button onClick={loadUser}>Get User</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login }) => (
          <li key={id}>Name: {login}</li>
        ))}
        {/* {user.map((email) => {
          return <li>{email}</li>;
        })}; */}
      </ul>
    </div>
  );
};

export default App;
