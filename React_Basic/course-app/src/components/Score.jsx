import { useState } from "react";
import {
  H1,
  Div,
  PScore,
  Joke,
  Message,
  Button
} from "../styles/ScoreStyles"; // ou defina no mesmo arquivo

function Score() {
  const [count, setCount] = useState(0);

  const handleUpvote = () => {
    setCount(count + 1);
  };

  const handleDownvote = () => {
    setCount(count - 1);
  };

  return (
    <Div>
      <H1>Blague</H1>
      <Joke>Ma super blague</Joke>
      <PScore count={count}>Score: {count}</PScore>

      {count > 10 && <Message>🏆 Gagné !</Message>}

      <Button onClick={handleUpvote}>👍 Upvote</Button>
      <Button onClick={handleDownvote}>👎 Downvote</Button>
    </Div>
  );
}

export default Score;
