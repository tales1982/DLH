import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #1E1E2F;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding: 0;

  li a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 6px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #FF6B6B;
      color: #fff;
    }
  }
`;
