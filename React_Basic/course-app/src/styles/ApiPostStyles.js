// src/styles/CommentsStyles.js
import styled from 'styled-components';

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center ;
  max-width: 700px;
  margin: 60px auto;
  padding: 30px;
  background-color: #1E1E2F;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  color: white;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 12px;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 24px;
  color: #ccc;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  background-color: #2B2B3C;
  padding: 12px 16px;
  border-radius: 8px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const Message = styled.div`
  font-size: 1rem;
  color: #f5f5f5;
`;
