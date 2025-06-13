import { useState } from "react";
import styled from "styled-components";


const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color:rgb(250, 250, 250); /* tom escuro elegante */
  margin-top: 20px;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


const Div = styled.div`
  text-align: center;
`;

// Só cuida da cor com base no count
const PScore = styled.p`
  color: ${(props) => {
    if (props.count > 10) return "green";
    if (props.count < 0) return "red";
    return "black";
  }};
`;

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
      <p>Ma super blague</p>
      <PScore count={count}>Score: {count}</PScore>

      {count > 10 && <p>Won</p>}

      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
    </Div>
  );
}

Score.displayName = "Score";
export default Score;
