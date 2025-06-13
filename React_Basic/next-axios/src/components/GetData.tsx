"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";


interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
}

function GetData() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  function cadastraUser() {
    const newUser: User = {
      name,
      username: surname,
      email,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(() => {
        alert("Usuário cadastrado (fake) com sucesso!");
        setUsers([...users, { ...newUser, id: Date.now() }]); // Adiciona com ID único
        setName("");
        setSurname("");
        setEmail("");
      })
      .catch((err) => {
        console.error("Erro ao cadastrar:", err);
      });
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "1rem", color: "#333" }}>📋 Lista de Usuários</h1>

      <ul style={{ padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              listStyle: "none",
            }}
          >
            <strong style={{ color: "#2c3e50" }}>{user.name}</strong> –{" "}
            <span style={{ color: "#555" }}>{user.username}</span> –{" "}
            <span style={{ color: "#888" }}>{user.email}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: "2rem", color: "#333" }}>➕ Cadastrar novo usuário</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <button onClick={cadastraUser} style={buttonStyle}>
          Enviar
        </button>
      </div>
    </div>
  );
}

// Estilos reutilizáveis
const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "8px",
};

export default GetData;
