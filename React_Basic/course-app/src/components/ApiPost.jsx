import { useEffect, useState } from "react";
import {
  Section,
  Title,
  Paragraph,
  List,
  ListItem,
  Avatar,
  Message,
} from "../styles/ApiPostStyles";

function CommentsAPI() {
  const [commentsList, setCommentsList] = useState([]);

  async function refreshCommentsList() {
    const response = await fetch(
      "https://simple-comments-api.onrender.com/comments"
    );
    const data = await response.json();
    setCommentsList(data);
  }

  useEffect(() => {
    refreshCommentsList();
  }, []);

  return (
    <Section>
      <Title>Comments API</Title>
      <Paragraph>Nombre de commentaires : {commentsList.length}</Paragraph>
      <List>
        {commentsList.map((commentaire) => (
          <ListItem key={commentaire._id}>
            <Avatar src={`/${commentaire.user}.jpeg`} alt={commentaire.user} />
            <Message>{commentaire.message}</Message>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default CommentsAPI;
