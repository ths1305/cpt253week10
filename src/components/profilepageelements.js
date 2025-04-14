import styled from 'styled-components';
export const UserProfile = styled.div`

  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
