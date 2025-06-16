import { useEffect, useState } from "react";
import {
  Section,
  Title,
  Paragraph,
  List,
  ListItem,
  Avatar,
  Message,
  StyledForm,
  Input,
  Button,
} from "../styles/CommentsStyles";

function CommentsAPI() {
  const [commentsList, setCommentsList] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("friend1");

  const userAvatars = {
    friend1: "/avatars/friend1.jpeg",
    user2: "/avatars/user2.jpeg",
    default: "/avatars/default.jpeg",
  };

  async function refreshCommentsList() {
    const response = await fetch(
      "https://simple-comments-api.onrender.com/comments"
    );
    const data = await response.json();
    setCommentsList(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (message.trim() === "") return;

    const body = { user, message };

    try {
      await fetch("https://simple-comments-api.onrender.com/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setMessage("");
      refreshCommentsList();
    } catch (error) {
      console.error("Erreur:", error);
    }
  }

  useEffect(() => {
    refreshCommentsList();
  }, []);

  return (
    <Section>
      <Title>Comments API</Title>

      <StyledForm onSubmit={handleSubmit}>
        <Input
          placeholder="Votre commentaire"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Input
          placeholder="Nom du user (ex: friend1, user2)"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button type="submit">Envoyer</Button>
      </StyledForm>

      <Paragraph>Nombre de commentaires : {commentsList.length}</Paragraph>

      <List>
        {commentsList.map((commentaire, index) => (
          <ListItem key={index}>
             <Avatar src={`/${commentaire.user}.jpeg`} alt={commentaire.user} />
            <Message>
              <strong>{commentaire.user}</strong>: {commentaire.message}
            </Message>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default CommentsAPI;
