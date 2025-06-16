import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #FAFAFA;
  margin-bottom: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Div = styled.div`
  background-color: #1E1E2F;
  padding: 40px;
  border-radius: 16px;
  max-width: 500px;
  margin: 60px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const PScore = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 16px 0;
  color: ${(props) => {
    if (props.count > 10) return "limegreen";
    if (props.count < 0) return "#FF4C4C";
    return "#FFD700"; // amarelo ouro
  }};
`;

export const Joke = styled.p`
  font-size: 1.1rem;
  color: #E0E0E0;
  margin-bottom: 12px;
`;

export const Message = styled.p`
  color: #00FFAA;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px 18px;
  margin: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #FF6B6B;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e05252;
  }
`;
