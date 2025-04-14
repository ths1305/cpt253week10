import styled from 'styled-components'

export const Nav = styled.header`
      background-color: ${({ isHovered, theme }) =>
    isHovered ? theme.primary : theme.secondary};
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  button {
    background-color: gray;
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    padding: 8px;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
    }
  }
`;

