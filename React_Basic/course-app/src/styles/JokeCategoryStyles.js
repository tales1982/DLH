import styled from "styled-components";

export const Section = styled.section`
  background-color: #1E1E2F;
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #F5F7F8;
  margin-bottom: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const StyledParagraph = styled.p`
  font-size: 1.1rem;
  color: #FFFFFF;
  margin-bottom: 24px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;

  li {
    background-color: #2B2B3C;
    color: #FFFFFF;
    padding: 10px 16px;
    margin-bottom: 8px;
    border-radius: 6px;
    font-weight: 500;
    transition: background-color 0.3s;

    &:hover {
      background-color: #FF6B6B;
      color: #FFF;
    }
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #FF6B6B;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e35252;
  }
`;
