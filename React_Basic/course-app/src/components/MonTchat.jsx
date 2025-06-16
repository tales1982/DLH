import { useEffect, useState } from "react";
import styled from "styled-components";

// Styles de base
const Container = styled.section`
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  background-color: #1E1E2F;
  color: white;
  border-radius: 12px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #2B2B3C;
  color: white;

  &:focus {
    outline: none;
    border-color: #FF6B6B;
  }
`;

const Button = styled.button`
  padding: 12px 16px;
  background-color: #FF6B6B;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e05252;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 14px;
  background-color: #2B2B3C;
  border-radius: 6px;
  margin-bottom: 10px;
  color: #f5f5f5;
  font-size: 1.1rem;
`;

function MonTchat() {
  const [rooms, setRooms] = useState([]);
  const [newRoomName, setNewRoomName] = useState("");


  useEffect(() => {
    fetch("https://chat-api-course.onrender.com/rooms")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 1) {
          setRooms(data.data); 
        }
      })
      
      .catch((err) => console.error("Erreur GET rooms:", err));
  }, []);

async function handleCreateRoom(e) {
  e.preventDefault();
  if (newRoomName.trim() === "") return;

  const body = { roomName: newRoomName };

  const res = await fetch("https://chat-api-course.onrender.com/rooms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await res.json();

  if (result.status === 1) {
    setNewRoomName("");          
    setRooms(prev => [...prev, result.data]); 
  } else {
    alert("Erro ao criar room");
  }
}


  return (
    <Container>
      <Title>Mon Tchat</Title>

      <StyledForm onSubmit={handleCreateRoom}>
        <Input
          type="text"
          placeholder="Nom de la nouvelle room"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
        />
        <Button type="submit">Créer</Button>
      </StyledForm>

      <List>
        {rooms.map((room) => (
          <ListItem key={room.id}>📌 {room.roomName}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default MonTchat;
