import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1E1E2F;
  padding: 40px;
  border-radius: 16px;
  max-width: 700px;
  margin: 60px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #F5F7F8;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

export const P = styled.p`
  text-align: center;
  color: #F5F5F5;
  font-size: 1.1rem;
  background-color: #2B2B3C;
  padding: 20px;
  border-radius: 12px;
  margin-top: 24px;
  max-width: 600px;
  line-height: 1.6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  background-color: #FF6B6B;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e05252;
  }
`;
