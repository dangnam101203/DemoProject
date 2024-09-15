import React, { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const user = users.find((user) => user.id === id);
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
      <div className="app-container">
        <div className="App">
          <h1 style={{padding: 24}}>Mini Project 1</h1>
          <UserForm addUser={addUser} editingUser={editingUser} updateUser={updateUser}/>
          <UserList users={users} deleteUser={deleteUser} editUser={editUser}/>
        </div>
      </div>
  );
}

export default App;
