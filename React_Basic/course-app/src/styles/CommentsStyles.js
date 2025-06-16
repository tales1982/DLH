import styled from 'styled-components';

export const Section = styled.section`
  max-width: 700px;
  margin: 60px auto;
  padding: 40px;
  background-color: #1E1E2F;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: white;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: #ccc;
  margin: 20px 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Input = styled.input`
  padding: 14px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #2B2B3C;
  color: white;

  &:focus {
    outline: none;
    border-color: #FF6B6B;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #FF6B6B;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #e05252;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #2B2B3C;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 16px;
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
